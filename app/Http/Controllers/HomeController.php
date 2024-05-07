<?php

namespace App\Http\Controllers;

use App\Models\Dog;
use App\Models\Sex;
use App\Models\Postal_Code;
use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class HomeController extends Controller
{
    public function home() {
        if (Auth::user()) {
            return redirect()->route('dashboard');
        }
        $postal_codes = Postal_code::all('id', 'postal_code', 'municipality');
        $sexes = Sex::all();

        return Inertia::render('Home', [
            'postal_codes' => $postal_codes,
            'sexes' => $sexes
        ]);
    }

    public function dashboard() {
        $dogs=Auth::user()->ownerships;
        return Inertia::render('Dashboard', ['dogs' => $dogs]);
    }
}
