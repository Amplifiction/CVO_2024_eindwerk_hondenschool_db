<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Ownership extends Model
{
    use HasFactory;

    // De twee relaties (met users en dogs) worden gedefinieerd in de User en Dog models,
    // per https://laravel.com/docs/11.x/eloquent-relationships#many-to-many .

}
