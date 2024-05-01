<?php

namespace App\Http\Controllers;

use App\Models\User;
use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function register() {
        $postal_codes = 0; //TO DO: queries schrijven (voor selects in register form)
        $sexes = 0;
        return Inertia::render('Auth/Register',[
            'postal_codes' => $postal_codes,
            'sexes' => $sexes,
        ]);
    }

    public function handleRegister (Request $request) {
        $request->validate([
            'first_name' => 'required',
            'last_name' => 'required',
            'sex_id' => 'required',
            'date_of_birth' => 'required',
            'email' => 'required|email:rfc,dns|unique:users',
            'cellphone' => 'required',
            'street'=>'required',
            'house_number' =>'required',
            'postal_code_id' =>'required',
            'password' => 'required|confirmed|min:8'
        ]);
        $user = new User;
        $user->first_name = $request->first_name;
        $user->last_name = $request->last_name;
        $user->sex_id = $request->sex_id;
        $user->date_of_birth = $request->date_of_birth;
        $user->email = $request->email;
        $user->cellphone = $request->cellphone;
        $user->phone = $request->phone;
        $user->street = $request->street;
        $user->password = Hash::make($request->password);
        $user->role_id = 1;
        $user->save();

        //return redirect()->route('/');
    }
}
