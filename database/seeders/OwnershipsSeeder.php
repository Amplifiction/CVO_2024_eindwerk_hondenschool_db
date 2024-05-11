<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class OwnershipsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('ownerships')->insert([
            ['user_id' => 1, 'dog_id' => 1],
            ['user_id' => 2, 'dog_id' => 2],
            ['user_id' => 1, 'dog_id' => 2],
            ['user_id' => 3, 'dog_id' => 1],
            ['user_id' => 3, 'dog_id' => 2],
            ['user_id' => 3, 'dog_id' => 3],
            ['user_id' => 3, 'dog_id' => 4],
        ]);
    }
}
