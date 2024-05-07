<?php

namespace App\Http\Controllers;

use App\Models\Dog;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    public function index() {
        $dogs=Auth::user()->ownerships;
        return view('/', ['dogs' => $dogs]);
    }
}
