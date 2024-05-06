<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;

class TestController extends Controller
{
    public function test ()  {
        return Inertia::render('Test');
    }

    public function handleTest (Request $request) {
        dd($request);
    }
}
