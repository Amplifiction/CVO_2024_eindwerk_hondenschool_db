<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class User extends Authenticatable
{
    use HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'password' => 'hashed',
        ];
    }

    public function postal_code() {
        return $this->belongsTo(Postal_code::class);
    }

    public function role() {
        return $this->belongsTo(Role::class);
    }

    public function sex() {
        return $this->belongsTo(Sex::class);
    }

    public function ownerships() {
        return $this->belongsToMany(Dog::class, 'ownerships', 'user_id', 'dog_id');
    }

    public function memberships() {
        return $this->belongsToMany(Dog::class, 'memberships', 'user_id', 'dog_id')
        ->withPivot('discipline_id', 'start_date', 'status_id', 'fee');
    }
}
