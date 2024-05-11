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
            $table->foreignId('user_id'); //geen constrained(), want geen user deletion voorzien.
            $table->foreignId('dog_id'); //geen constrained(), want memberships worden verwijderd voor hond w verwijderd. (zie DogController)
            //non-standaard many2many velden: (withPivot nodig in models)
                $table->foreignId('discipline_id')->constrained(); // discipline mag niet w verwijderd indien geassocieerde ms
                $table->date('start_date');
                //$table->date('end_date'); //lidmaatschappen duren steeds een jaar
                $table->foreignId('status_id')->constrained(); // status mag niet w verwijderd indien geassocieerde ms
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
