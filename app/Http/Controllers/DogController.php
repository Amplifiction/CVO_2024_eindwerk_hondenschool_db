<?php

namespace App\Http\Controllers;

use App\Models\Dog;
use Inertia\Inertia;
use App\Models\Breed;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Gate;

class DogController extends Controller
{

    public function create () {
        $breeds=Breed::all();
        return Inertia::render('Dogs/CreateDog', [
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

    public function edit (Dog $dog) {
        if (! Gate::allows('ownership', Auth::user())) {
            abort(403);
        }
        $breeds=Breed::all();
        return Inertia::render('Dogs/EditDog', [
            'breeds' => $breeds,
            'dog' => $dog
        ]);
    }

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

    public function destroy (Dog $dog) {
        if (! Gate::allows('ownership', $dog)) {
            abort(403);
        }
        $dog->ownerships()->detach(Auth::user()); //TO DO: is dit nodig? Zo ja, zelfde voor memberships
        $dog->delete();
        return redirect()->route('dashboard');
    }
}
