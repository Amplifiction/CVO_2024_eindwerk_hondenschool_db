<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Dog extends Model
{
    use HasFactory;

    public function breed() {
        return $this->belongsTo(Breed::class);
    }

    public function ownerships() {
        return $this->belongsToMany(User::class, 'ownerships', 'dog_id', 'user_id');
    }

    public function memberships() {
        return $this->belongsToMany(User::class, 'memberships', 'dog_id', 'user_id')
        ->withPivot('discipline_id', 'start_date', 'end_date', 'fee');
    }
}
