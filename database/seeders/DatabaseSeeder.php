<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Database\Seeders\MembershipsSeeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        // User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);

        $this->call([
            RolesSeeder::class,
            SexesSeeder::class,
            BreedsSeeder::class,
            DisciplinesSeeder::class,
            PostalCodesSeeder::class,
            StatusesSeeder::class,

            // Seeders voor testing. DISABLE FOR PRODUCTION!
                UsersSeeder::class,
                DogsSeeder::class,
                OwnershipsSeeder::class,
                MembershipsSeeder::class,
        ]);
    }
}
