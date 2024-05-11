<?php

namespace App\Http\Controllers;

use App\Models\Dog;
use App\Models\Sex;
use App\Models\User;
use Inertia\Inertia;
use App\Models\Status;
use App\Models\Ownership;
use App\Models\Discipline;
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
        foreach ($dogs as $dog) {
            $dog->other_owners = $dog->ownerships()->where('user_id', '!=', Auth::user()->id)->get();
        }

        $memberships = Membership::where('user_id', Auth::user()->id)->get();
        foreach ($memberships as $ms) { // toevoegen extra velden om aan compo door te geven als één array. Kan simpeler: zie other_owners hierboven.
            $ms->dog_name = Dog::where('id', $ms->dog_id)->first()->name;
            $ms->disc_name = Discipline::where('id', $ms->discipline_id)->first()->name;
            $ms->status_name = Status::where('id', $ms->status_id)->first()->name;
        }

        return Inertia::render('Dashboard', [
            'dogs' => $dogs,
            'memberships' => $memberships
        ]);
    }

    public function home() { //view voor login+register
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
