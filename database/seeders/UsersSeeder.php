<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class UsersSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('users')->insert([
            [
                'id' => 1,
                'email' => 'bart-stevens@outlook.com',
                'email_verified_at' => now(),
                'password' => Hash::make('123456789'),
                'first_name' => 'Jerom',
                'last_name' => 'Van der Waal',
                'sex_id' => 1,
                'date_of_birth' => '1993-01-01',
                'cellphone' => '06-12345678',
                'phone' => '011 64 61 48',
                'street' => 'Dorpsplein',
                'housenumber'  => 23,
                'postal_code_id' => 4,
                'role_id' => 1
            ],
            [
                'id' => 2,
                'email' => 'bart_stevens9@hotmail.com',
                'email_verified_at' => now(),
                'password' => Hash::make('123456789'),
                'first_name' => 'Josefien',
                'last_name' => 'Broeckx',
                'sex_id' => 2,
                'date_of_birth' => '1993-01-01',
                'cellphone' => '06-12345678',
                'phone' => '011 64 61 48',
                'street' => 'Dorpsplein',
                'housenumber'  => 23,
                'postal_code_id' => 4,
                'role_id' => 1
            ],
            [
                'id' => 3,
                'email' => 'bart.stevens9@gmail.com',
                'email_verified_at' => now(),
                'password' => Hash::make('123456789'),
                'first_name' => 'Bart',
                'last_name' => 'Stevens',
                'sex_id' => 1,
                'date_of_birth' => '1983-12-01',
                'cellphone' => '0496 98 40 31',
                'phone' => '011 64 61 48',
                'street' => 'Dorpsplein',
                'housenumber'  => 23,
                'postal_code_id' => 4,
                'role_id' => 2
            ],
            [
                'id' => 4,
                'email' => 'superadmin@test.be', //triggert fout bij verzenden van "echte" mails (dus niet naar Mailtrap)
                'email_verified_at' => now(),
                'password' => Hash::make('123456789'),
                'first_name' => 'Jean',
                'last_name' => 'Claude',
                'sex_id' => 1,
                'date_of_birth' => '1983-12-01',
                'cellphone' => '0496 98 40 31',
                'phone' => '011 64 61 48',
                'street' => 'Dorpsplein',
                'housenumber'  => 23,
                'postal_code_id' => 4,
                'role_id' => 3
            ],
            ]);
    }
}
