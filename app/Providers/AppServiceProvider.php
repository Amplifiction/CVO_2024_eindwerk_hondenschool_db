<?php

namespace App\Providers;

use App\Models\Dog;
use App\Models\User;
use App\Models\Ownership;
use App\Models\Discipline;
use App\Models\Membership;
use Illuminate\Support\Facades\Gate;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        Gate::define('ownership', function (User $user, Dog $dog) { // wordt gebruikt bij meerdere controller functions.
            // return $user->ownerships->contains('dog_id', $dog->id); //firstWhere ipv contains?
            $ownerships = Ownership::where('user_id', $user->id)
                ->where('dog_id', $dog->id)
                ->first();
            return $ownerships!=null; //in feite overbodig? Ingevulde $ownerships is true, null is false?
        });

        Gate::define('membership', function (User $user, Membership $membership) {
            $dog_id = $membership->dog_id;
            $discipline_id = $membership->discipline_id;
            $memberships = Membership::where('user_id', $user->id)
                ->where('dog_id', $dog_id)
                ->where('discipline_id', $discipline_id)
                ->first();
            return $memberships!=null;
        });
    }
}
