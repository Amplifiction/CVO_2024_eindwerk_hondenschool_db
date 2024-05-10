<?php

namespace App\Http\Controllers;

use App\Models\Dog;
use App\Models\Sex;
use App\Models\Postal_Code;
use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class DashboardController extends Controller
{
    public function dashboard() {
        if (!Auth::user()) return redirect()->route('home');
            // Is (samen met verwijderen middleware van route) noodzakelijk om fout "Route [login] not defined." te voorkomen. Zie "eigen logboek.docx", 9/5/2024 voor details.
        $dogs=Auth::user()->ownerships;
        $memberships=Auth::user()->memberships;
        foreach ($memberships as $ms) {
            //$dogname = Dog::where('id', $ms->dog_id)->first()->name;
                //resultaat: Attempt to read property "name" on null
            $dogname = Dog::where('id', $ms->dog_id)->value('name');
                //resultaat: dog_name is leeg.
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
