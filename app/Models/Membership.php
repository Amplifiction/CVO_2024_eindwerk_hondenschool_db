<?php

namespace App\Models;

use App\Models\Status;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Membership extends Model
{
    use HasFactory;

    public function discipline() {
        return $this->belongsTo(Discipline::class);
    }

    public function status() {
        return $this->belongsTo(Status::class);
    }

    // De relaties met users en dogs worden gedefinieerd in de User en Dog models,
    // per https://laravel.com/docs/11.x/eloquent-relationships#many-to-many .
}
