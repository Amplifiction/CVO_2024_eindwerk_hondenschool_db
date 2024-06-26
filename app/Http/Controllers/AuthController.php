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
use Illuminate\Auth\Events\Registered;
use App\Notifications\RegistrationNoti;
use Illuminate\Validation\Rules\Password;

class AuthController extends Controller
{
    public function handleLogin(Request $request) {
        $request->validate([
            'email' =>'required|email',
            'password' => 'required'
        ]);
        if (Auth::attempt(['email' => $request->email, 'password' => $request->password])) {
            //$request->session()->flash('message', 'Login succesvol');
            return redirect()->intended(route('home'));
            // intended zorgt ervoor dat je na login naar de intended pg gaat, met als fallback home.
            // Volgens Bert nodig voor verify get-route, die ingelogde gebruiker nodig heeft. Dus inlogt en vervolgens terug doorstuurt naar intended verify.
            // Gezien ik deze route niet aanspreek, werkt dit voor mij echter niet.
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
        $request->validate([
            'first_name' => 'required',
            'last_name' => 'required',
            // 'sex_id' => 'required',
            // 'date_of_birth' => 'required',
            'email' => 'required|email:rfc,dns|unique:users',
            // 'cellphone' => 'required',
            // 'street'=>'required',
            // 'housenumber' =>'required',
            // 'postal_code_id' => 'required',
            'password' => ['required', 'confirmed', Password::min(8)->mixedCase()->numbers()],
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
        $request->session()
            ->flash('message',
            'Registratie succesvol! U werd automatisch ingelogd.
            In het kader van deze demoversie werden alle restricties mbt email verificatie opgeheven.
            ');
            // Check uw e-mail voor een link om uw account te activeren.
            // Je moet ingelogd zijn in de browser die wordt geopend door de verificatielink!
            // Onder "profiel bewerken" vind je een knop waarmee je deze verificatiemail opnieuw kan verzenden.
            // En ja, in een productie-app zal deze boodschap korter zijn ;)
            //Zonder activatie kan u de meeste bewerkingen niet uitvoeren.
        //PHP Intelephense plugin: method 'flash' is zogezegd unidentified, maar werkt.

        event(new Registered($user));
        $user->notify(new RegistrationNoti($user));

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
