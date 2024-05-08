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
        $dogs=Auth::user()->ownerships;
        return Inertia::render('Dashboard', ['dogs' => $dogs]);
    }

}
