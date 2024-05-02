<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class SexesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('sexes')->insert([
            ['name'=>'man'],
            ['name'=>'vrouw'],
            ['name'=>'x'],
        ]);
    }
}
