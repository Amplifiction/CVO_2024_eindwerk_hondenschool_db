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
use Illuminate\Support\Facades\Gate;

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
            $ms->disc_url = Discipline::where('id', $ms->discipline_id)->first()->url_name;
            $ms->status_name = Status::where('id', $ms->status_id)->first()->name;
        }

        return Inertia::render('Dashboard', [
            'dogs' => $dogs,
            'memberships' => $memberships,
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

    public function dashboardAdmin() {
        if (!Auth::user()) return redirect()->route('home');
        $user=Auth::user();
        if(!Gate::allows('isAdmin', $user)) {abort(403);}

        $requestedMs = Membership::where('status_id', 1)->get();
        foreach ($requestedMs as $rms) {
            $rms->user=User::where('id', $rms->user_id)->first();
            $rms->dog=Dog::where('id', $rms->dog_id)->first();
            $rms->discipline=Discipline::where('id', $rms->discipline_id)->first();
        }

        $allMs = Membership::all();
        foreach ($allMs as $ms) {
            $ms->user=User::where('id', $ms->user_id)->first();
            $ms->dog=Dog::where('id', $ms->dog_id)->first();
            $ms->discipline=Discipline::where('id', $ms->discipline_id)->first();
            $ms->status=Status::where('id', $ms->status_id)->first();
        }

        $statuses = Status::all();

        return Inertia::render('DashboardAdmin', [
            'requestedMs' => $requestedMs,
            'statuses' => $statuses,
            'allMs' => $allMs
        ]);
    }
}
