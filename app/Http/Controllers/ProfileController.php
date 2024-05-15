<?php

namespace App\Http\Controllers;

use App\Models\Sex;
use Inertia\Inertia;
use App\Models\Postal_Code;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use App\Notifications\ProfileUpdateNoti;
use App\Notifications\PasswordUpdateNoti;
use Illuminate\Validation\Rules\Password;

class ProfileController extends Controller
{
    public function editProfile () {
        $postal_codes = Postal_code::all('id', 'postal_code', 'municipality');
        $sexes = Sex::all();

        return Inertia::render('Profile/EditProfile',[
            'postal_codes' => $postal_codes,
            'sexes' => $sexes,
        ]);
    }

    public function editPassword () {
        return Inertia::render('Profile/EditPassword');
    }

    public function handleEditPassword (Request $request) {
        $user = Auth::user();
        $request->validate([
            'password' => ['required', 'confirmed', Password::min(8)->mixedCase()->numbers()]
        ]);
        $user->password = Hash::make($request->password);
        $user->save();
        $request->session()->flash('message', 'Uw wachtwoord werd bijgewerkt.');
        $user->notify(new PasswordUpdateNoti($user));
        return redirect()->route('dashboard');
    }

    public function handleEditProfile (Request $request) {
        $user = Auth::user();
        $request->validate([
            'first_name' => 'required',
            'last_name' => 'required',
            // 'sex_id' => ['required', Rule::notIn(['-1'])],
            // 'date_of_birth' => 'required',
            'email' => [
                'required',
                'email:rfc,dns',
                Rule::unique('users')->ignore($user->id) //nodig zodat user eigen (dezelfde) email opnieuw kan opslaan.
            ],
            // 'cellphone' => 'required',
            // 'street'=>'required',
            // 'housenumber' =>'required',
            // 'postal_code_id' => ['required', Rule::notIn(['-1'])],
        ]);
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
        $user->save();

        $request->session()->flash('message', 'Uw gegevens werden bijgewerkt.');
        //PHP Intelephense plugin: method 'flash' is zogezegd unidentified, maar werkt.

        $user->notify(new ProfileUpdateNoti($user));

        return redirect()->route('dashboard');
    }

}
