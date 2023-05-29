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
        Schema::create('my_orders', function (Blueprint $table) {
            $table->id();
            $table->string('user_id');
            $table->string('item_id');
            $table->string('item_name');
            $table->string('item_category');
            $table->string('item_price');
            $table->string('item_dsc');
            $table->string('item_qty');
            $table->string('item_image');
            $table->string('item_discount')->nullable();
            $table->string('item_subtotal');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('my__orders');
    }
};
