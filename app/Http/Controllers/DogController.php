<?php

namespace App\Http\Controllers;

use App\Models\Dog;
use Inertia\Inertia;
use App\Models\Breed;
use App\Models\Ownership;
use App\Models\Membership;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Gate;

class DogController extends Controller
{

    public function add () { //view voor zowel store (nieuwe hond) als addShared.
        $breeds=Breed::all();
        return Inertia::render('Dogs/AddDog', [
            'breeds' => $breeds
        ]);
    }
    public function store (Request $request) {
        $request->validate([
            'breed_id' => 'required',
            'date_of_birth' => 'required',
            'name' => 'required',
            'sex' => 'required',
        ]);
        $dog = new Dog();
        $user = Auth::user();
        $dog->breed_id = $request->breed_id;
        $dog->date_of_birth = $request->date_of_birth;
        $dog->name = $request->name;
        $dog->sex = $request->sex;
        $dog->uuid = Str::orderedUuid();
        $dog->save();

        $dog->ownerships()->attach($user); //mag ook andersom: dog aan user attachen

        return redirect()->route('dashboard');
    }

    public function addShared (Request $request) {
        $request->validate(['uuid' => 'required']);
        $dog = Dog::where('uuid', $request->uuid)->first();
        $user = Auth::user();
        $doubleDog = $dog->ownerships()
            ->where('user_id', $user->id)
            ->where('dog_id', $dog->id) //overbodig?
            ->first();
        if ($doubleDog) {
            $request->session()->flash('message', 'Deze hond is al toegewezen aan uw account.');
            return redirect()->route('dashboard');
        }
        $dog->ownerships()->attach($user);

        $request->session()->flash('message', 'Gedeelde hond werd toegevoegd.');
        return redirect()->route('dashboard');
    }

    public function edit (Dog $dog) {
        if (! Gate::allows('ownership', $dog)) {
            abort(403);
        }
        $breeds=Breed::all();
        return Inertia::render('Dogs/EditDog', [
            'breeds' => $breeds,
            'dog' => $dog
        ]);
    }

    // $user=Auth::user();
    // dd($user->ownerships);

    // if(!auth()->user()->can('ownership', $dog)) {
    //     abort(403);
    // }


    public function update (Request $request, Dog $dog) {
        if (! Gate::allows('ownership', $dog)) {
            abort(403);
        }
        $request->validate([
            'breed_id' => 'required',
            'date_of_birth' => 'required',
            'name' => 'required',
            'sex' => 'required',
        ]);
        $dog->breed_id = $request->breed_id;
        $dog->date_of_birth = $request->date_of_birth;
        $dog->name = $request->name;
        $dog->sex = $request->sex;
        $dog->save();

        $request->session()->flash('message', 'De gegevens van uw hond werden bijgewerkt.');
        return redirect()->route('dashboard');
    }

    public function destroy (Request $request, Dog $dog) {
        if (! Gate::allows('ownership', $dog)) {
            abort(403);
        }
        $user = Auth::user();
        $memberships = Membership::where('user_id', $user->id)
            ->where('dog_id', $dog->id)
            ->get();
        foreach ($memberships as $membership) {
            $membership->delete();
        }
        $ownCount = $dog->ownerships()->count();
        if ($ownCount > 1) {
            $dog->ownerships()->detach(Auth::user());
            $request->session()->flash('message', 'De hond werd ontkoppeld van uw account (maar niet van die van mede-eigenaars).');
        } else {
            $dog->ownerships()->detach(Auth::user());
            $dog->delete();
            $request->session()->flash('message', 'De hond werd verwijderd uit de database.');
        }
        return redirect()->route('dashboard');
    }
    //Membership zonder ownership is niet mogelijk. Dus moet/mag het verwijderen van memberships van andere users niet worden voorzien.
        //(Dog wordt niet deleted indien ownCount > 1)
    //Geen flash message nodig over deletion membership: gebruiker wordt gewaarschuwd dat dog deleten = ms deleten.
}
