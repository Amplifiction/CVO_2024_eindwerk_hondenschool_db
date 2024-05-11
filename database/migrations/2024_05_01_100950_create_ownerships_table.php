<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('ownerships', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->foreignId('user_id'); //geen constrained(): user deletion niet voorzien.
            $table->foreignId('dog_id'); //geen constrained(): geen delete van dog indien meerdere ownerships. +bij 1 ownership wordt die wordt detached voor dog wordt gedelete. (Zie DogController)
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('ownerships');
    }
};
