<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class MembershipsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('memberships')->insert([
            ['user_id' => 1, 'dog_id' => 1, 'discipline_id' => 1, 'start_date' => '2024-05-10', 'status_id'=> 1],
            ['user_id' => 1, 'dog_id' => 2, 'discipline_id' => 2, 'start_date' => '2024-05-10', 'status_id'=> 1],
            ['user_id' => 2, 'dog_id' => 2, 'discipline_id' => 3, 'start_date' => '2024-05-10', 'status_id'=> 1],
            ['user_id' => 3, 'dog_id' => 3, 'discipline_id' => 3, 'start_date' => '2024-05-11', 'status_id'=> 2],
            ['user_id' => 3, 'dog_id' => 3, 'discipline_id' => 4, 'start_date' => '2024-05-11', 'status_id'=> 2],
            ['user_id' => 3, 'dog_id' => 4, 'discipline_id' => 3, 'start_date' => '2024-05-11', 'status_id'=> 2],
            ['user_id' => 3, 'dog_id' => 4, 'discipline_id' => 4, 'start_date' => '2024-05-11', 'status_id'=> 2],
        ]);
    }
}
