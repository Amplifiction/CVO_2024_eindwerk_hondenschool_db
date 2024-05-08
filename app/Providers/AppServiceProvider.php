<?php

namespace App\Providers;

use App\Models\Dog;
use App\Models\User;
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
        Gate::define('ownership', function (Dog $dog, User $user) { // wordt gebruikt bij meerdere controller functions.
            return $user->id === $dog->ownerships()->user_id;
        });
    }
}
