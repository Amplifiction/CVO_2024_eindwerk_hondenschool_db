<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Postal_code extends Model
{
    use HasFactory;

    public function users () {
        return $this->hasMany(User::class);
    }
}
