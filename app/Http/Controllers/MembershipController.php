<?php

namespace App\Http\Controllers;

use App\Models\Dog;
use App\Models\User;
use Inertia\Inertia;
use App\Models\Status;
use App\Models\Discipline;
use App\Models\Membership;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Gate;
use App\Notifications\StatusChangeNoti;
use Illuminate\Support\Facades\Notification;

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
        // variabelen voor Rule::unique
            // if (!is_null($request->dog_id)) {
            //     $dog_id = $request->dog_id;
            // }
            // if(!is_null($request->discipline_id)) {
            //     $discipline_id = $request->discipline_id;
            // }
            // $user_id = Auth::user()->id;
        $request->validate([
            'dog_id' => 'required',
            'discipline_id' => 'required',
            'start_date' => 'required',
            // Rule::unique('memberships')
            //     ->where(function ($query) use ($user_id, $dog_id, $discipline_id) {
            //     return $query->where('user_id', $user_id)
            //         ->where('dog_id', $dog_id)
            //         ->where('discipline_id', $discipline_id);
            // }),
        ]);

        //Controle op unique membership
        //TO DO: werkt, maar oplossing waarbij form wordt repopulated zou beter zijn.
        $doubleMs = Membership::where('dog_id', $request->dog_id)
            ->where('user_id', Auth::user()->id)
            ->where('discipline_id', $request->discipline_id)
            ->first();
        if ($doubleMs) {
            $request->session()->flash('message', 'U heeft reeds een inschrijving voor de gekozen hond en discipline.');
            return redirect()->route('dashboard');
        }

        $ms = new Membership();
        $ms->user_id = Auth::user()->id;
        $ms->dog_id = $request->dog_id;
        $ms->discipline_id = $request->discipline_id;
        $ms->start_date = $request->start_date;
        $ms->status_id = 1;
        $ms->save();
        return redirect()->route('dashboard');
    }

    public function setStatus (Request $request, Membership $membership) {
        if (!Gate::allows('editOwnData', $membership)) {abort(403);}

        $request->validate([
            'status_id' => ['required', Rule::notIn(['-1'])]
        ]);
        $membership->status_id = $request->status_id;
        $membership->save();

        $user=User::where('id', $membership->user_id)->first();
        $notiData['dog_name']=Dog::where('id', $membership->dog_id)->first()->name;
        $notiData['user_firstname']=$user->first_name;
        $notiData['status_name']=$membership->status->name;
        $notiData['discipline_name']=$membership->discipline->name;
        Notification::send($user, new StatusChangeNoti($notiData));

        //return redirect()->route('dashboard-admin'); //overbodig: is zelfde pg; React rendert opnieuw.
    }

    public function destroy (Request $request, Membership $membership) {
        if (!Gate::allows('membership', $membership)) {abort(403);}
        $membership->delete();
        $request->session()->flash('message', 'Lidmaatschap verwijderd.');
        return redirect()->route('dashboard');
    }
}
