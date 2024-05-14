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
            ['name'=>'agility', 'url_name'=>'agility'],
            ['name'=>'dog dance', 'url_name'=>'dog-dance'],
            ['name'=>'gehoorzaamheid', 'url_name'=>'gehoorzaamheid'],
            ['name'=>'hoopers', 'url_name'=>'hoopers'],
            ['name'=>'search and rescue', 'url_name'=>'rescue'],
        ]);

    }
}
