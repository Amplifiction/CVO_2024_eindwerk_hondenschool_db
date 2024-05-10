<?php

namespace App\Http\Controllers;

use App\Models\Dog;
use App\Models\Sex;
use Inertia\Inertia;
use App\Models\Membership;
use App\Models\Postal_Code;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class DashboardController extends Controller
{
    public function dashboard() {
        if (!Auth::user()) return redirect()->route('home');
            // Is (samen met verwijderen middleware van route) noodzakelijk om fout "Route [login] not defined." te voorkomen. Zie "eigen logboek.docx", 9/5/2024 voor details.
        $dogs=Auth::user()->ownerships;
        $memberships = Membership::where('user_id', Auth::user()->id)->get();
        foreach ($memberships as $ms) {
            //resultaat: Attempt to read property "name" on null
                //$dogname = $ms->dog->name;
                //$dogname = Dog::find($ms->dog_id)->name;
            //resultaat: SQLSTATE[HY000]: General error: 1 near "from": syntax error
                //$dogname = Dog::find('id', $ms->dog_id)->value('name');
            //resultaat: dog_name is leeg.
                //$dogname = Dog::where('id', $ms->dog_id)->value('name');
            //resultaat: juist
                $dogname = Dog::where('id', $ms->dog_id)->first()->name;
            $ms->dog_name = $dogname;
        }

        return Inertia::render('Dashboard', [
            'dogs' => $dogs,
            'memberships' => $memberships
        ]);
    }

    public function home() {
        // if (Auth::user()) //Overbodig: wordt opgevangen door de middleware in web.php
        //     return redirect()->route('dashboard');
        // }
        $postal_codes = Postal_code::all('id', 'postal_code', 'municipality');
        $sexes = Sex::all();

        return Inertia::render('Home', [
            'postal_codes' => $postal_codes,
            'sexes' => $sexes
        ]);
    }

}
