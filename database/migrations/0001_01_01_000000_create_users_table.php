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
        Schema::create('users', function (Blueprint $table) {
            //standaardvelden
                $table->id();
                $table->string('email')->unique();
                $table->timestamp('email_verified_at')->nullable();
                $table->string('password');
                $table->rememberToken();
                $table->timestamps();
            //einde standaardvelden
            $table->string('member_number')->nullable();
            $table->string('first_name');
            $table->string('last_name');
            $table->foreignId('sex_id')->constrained();
            $table->date('date_of_birth');
            $table->string('cellphone');
            $table->string('phone')->nullable();
            $table->string('street');
            $table->string('house_number');
            $table->string('housenumber_addition')->nullable();
            $table->foreignId('postal_code_id')->constrained();
            $table->foreignId('role_id')->constrained();
            $table->text('remarks')->nullable();
        });

        //De volgende tabellen zijn volledig standaard.
        Schema::create('password_reset_tokens', function (Blueprint $table) {
            $table->string('email')->primary();
            $table->string('token');
            $table->timestamp('created_at')->nullable();
        });

        Schema::create('sessions', function (Blueprint $table) {
            $table->string('id')->primary();
            $table->foreignId('user_id')->nullable()->index();
            $table->string('ip_address', 45)->nullable();
            $table->text('user_agent')->nullable();
            $table->longText('payload');
            $table->integer('last_activity')->index();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('users');
        Schema::dropIfExists('password_reset_tokens');
        Schema::dropIfExists('sessions');
    }
};
