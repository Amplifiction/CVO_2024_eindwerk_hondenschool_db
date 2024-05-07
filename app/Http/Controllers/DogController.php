<?php

namespace App\Http\Controllers;

use App\Models\Dog;
use Inertia\Inertia;
use App\Models\Breed;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class DogController extends Controller
{

    public function create () { //view
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

        return redirect()->route('home');
    }
}
