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
        Schema::create('memberships', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->foreignId('user_id')->constrained();
            $table->foreignId('dog_id')->constrained();
            //non-standaard many2many velden: (withPivot nodig in models)
                $table->foreignId('discipline_id')->constrained();
                $table->date('start_date');
                //$table->date('end_date'); //lidmaatschappen duren steeds een jaar
                $table->foreignId('status_id')->constrained();
                $table->decimal('fee')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('memberships');
    }
};
