<?php

namespace App\Http\Controllers;

use App\Models\Sex;
use App\Models\User;
use Inertia\Inertia;
use App\Models\Postal_Code;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function handleLogin(Request $request) {
        $request->validate([
            'email' =>'required|email',
            'password' => 'required'
        ]);
        if (Auth::attempt(['email' => $request->email, 'password' => $request->password])) {
            //$request->session()->flash('message', 'Login succesvol');
            return redirect()->route('home');
        }
        return back()->withErrors([
            'email' => 'Wij kunnen u niet aanmelden met de door u verstrekte gegevens.'
        ]);
    }

    public function handleLogout() {
        Auth::logout();
        return redirect()->route('home');
    }

    public function handleRegister (Request $request) {
        //TO DO: not in -1 rules zijn restanten van selects (ipv combobox - zie vroege commits) en mogen w geschrapt
        $request->validate([
            'first_name' => 'required',
            'last_name' => 'required',
            'sex_id' => ['required', Rule::notIn(['-1'])],
            'date_of_birth' => 'required',
            'email' => 'required|email:rfc,dns|unique:users', //TO DO: dns controle lijkt niet te werken.
            'cellphone' => 'required',
            'street'=>'required',
            'housenumber' =>'required',
            'postal_code_id' => ['required', Rule::notIn(['-1'])],
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
        $user->housenumber = $request->housenumber;
        $user->housenumber_addition = $request->housenumber_addition;
        $user->postal_code_id = $request->postal_code_id;
        $user->password = Hash::make($request->password);
        $user->role_id = 1;
        $user->save();

        Auth::login($user);
        $request->session()->flash('message', 'Registratie succesvol! U werd automatisch ingelogd.');
        //PHP Intelephense plugin: method 'flash' is zogezegd unidentified, maar werkt.

        return redirect()->route('dashboard');
    }

    // DEZE FUNCTIES ZIJN OVERBODIG NU DIT GEEN PAGES MAAR COMPONENTS ZIJN
        // public function register() {
        //     $postal_codes = Postal_code::all('id', 'postal_code', 'municipality');
        //     $sexes = Sex::all();

        //     return Inertia::render('Auth/Register',[
        //         'postal_codes' => $postal_codes,
        //         'sexes' => $sexes,
        //     ]);
        // }
        // public function login() {
        //     return Inertia::render('Auth/Login');
        // }

}
