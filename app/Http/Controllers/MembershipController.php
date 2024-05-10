<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Status;
use App\Models\Discipline;
use App\Models\Membership;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class MembershipController extends Controller
{
    public function create () {
        $dogs=Auth::user()->ownerships;
        $disciplines=Discipline::all();
        $statuses=Status::all();
        return Inertia::render('Memberships/CreateMembership', [
            'dogs' => $dogs,
            'disciplines' => $disciplines,
            'statuses' => $statuses
        ]);
    }

    public function store (Request $request) {
        $request->validate([
            'dog_id' => 'required',
            'discipline_id' => 'required',
            'start_date' => 'required',
        ]);
        $ms = new Membership();
        $ms->user_id = Auth::user()->id;
        $ms->dog_id = $request->dog_id;
        $ms->discipline_id = $request->discipline_id;
        $ms->start_date = $request->start_date;
        $ms->status_id = 1;
        $ms->save();
        return redirect()->route('dashboard');
    }

    public function destroy (Request $request, Membership $ms) {
        //TO DO: gate toevoegen
        $ms->delete(); //TO Do: werkt niet
        $request->session()->flash('message', 'Lidmaatschap verwijderd.');
        return redirect()->route('dashboard');
    }
}
