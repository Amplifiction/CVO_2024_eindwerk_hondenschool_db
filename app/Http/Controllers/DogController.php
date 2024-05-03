<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class DogController extends Controller
{
    public function store (Request $request) {
        $request->validate([
            'breed_id' => 'required',
            'date_of_birth' => 'required',
            'name' => 'required',
            'sex' => 'required',
        ]);
        $dog = new Dog();
        $dog->user_id = Auth::user()->id;
        $dog->breed_id = $request->breed_id;
        $dog->date_of_birth = $request->date_of_birth;
        $dog->name = $request->name;
        $dog->sex = $request->sex;
        $dog->uuid = Str::orderedUuid();
        $dog->save();

        return redirect()->route('dashboard');
    }
}
