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
            ['name'=>'Agility'],
            ['name'=>'Dog Dance'],
            ['name'=>'Gehoorzaamheid'],
            ['name'=>'Hoopers'],
            ['name'=>'Search and rescue'],
        ]);

    }
}
