<?php

namespace App\Providers;

use App\Models\Dog;
use App\Models\User;
use App\Models\Ownership;
use App\Models\Discipline;
use App\Models\Membership;
use Illuminate\Support\Facades\Gate;
use Illuminate\Database\Eloquent\Model;
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

        Gate::define('isAdmin', function (User $user) {
            return $user->role_id>1;
        });

        Gate::define('editOwnData', function (User $user, Model $model) { //Model maakt universeel voor memberships/... (Is niveau hoger dan concrete Models.)
            $returnValue = false;
            if ($user->role_id===2 && $user->id !== $model->user_id) {
                $returnValue = true;
            }
            if ($user->role_id>2) {
                $returnValue = true;
            }
            return $returnValue;
        });
    }
}
