<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class DisciplinesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('disciplines')->insert([
            ['name'=>'agility'],
            ['name'=>'dog dance'],
            ['name'=>'gehoorzaamheid'],
            ['name'=>'hoopers'],
            ['name'=>'search and rescue'],
        ]);

    }
}
