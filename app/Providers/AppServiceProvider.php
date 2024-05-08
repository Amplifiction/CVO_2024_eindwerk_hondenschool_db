<?php

namespace App\Providers;

use App\Models\Dog;
use App\Models\User;
use App\Models\Ownership;
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
            $ownzies = Ownership::where('dog_id', $dog->id)
                ->where('user_id', $user->id)
                ->first();
            return $ownzies!=null;
        });
    }
}
