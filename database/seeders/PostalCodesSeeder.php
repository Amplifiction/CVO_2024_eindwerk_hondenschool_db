<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Postal_Code;

class PostalCodesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Postal_code::create( [
            'postal_code'=>5590,
            'municipality'=>'Achêne',
            'is_borough'=>'Ja',
            'main_municipality'=>'CINEY',
            'province'=>'NAMEN',
            'country'=>'België'
            ] );



            Postal_code::create( [
            'postal_code'=>5362,
            'municipality'=>'Achet',
            'is_borough'=>'Ja',
            'main_municipality'=>'HAMOIS',
            'province'=>'NAMEN',
            'country'=>'België'
            ] );
    }
}
