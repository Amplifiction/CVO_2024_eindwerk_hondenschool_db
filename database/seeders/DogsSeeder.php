<?php

namespace Database\Seeders;

use Illuminate\Support\Str;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class DogsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('dogs')->insert([
            [
                'id' => 1,
                'breed_id' => 3,
                'date_of_birth' => '2022-01-01',
                'name' => 'Rex',
                'sex' => 0,
                'uuid'=> Str::orderedUuid(),
            ],
            [
                'id' => 2,
                'breed_id' => 17,
                'date_of_birth' => '2020-01-01',
                'name' => 'Josy',
                'sex' => 1,
                'uuid'=> Str::orderedUuid(),
            ],
        ]);
    }
}
