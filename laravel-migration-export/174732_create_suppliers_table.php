<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSuppliersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('suppliers', function (Blueprint $table) {
            $table->bigInteger('supplier_id')->primary();
            $table->char('supplier_name');
            $table->char('product_name');
            $table->bigInteger('product_id')->primary();
            $table->bigInteger('category_id')->unique();
            $table->integer('price');
            $table->string('description');
            $table->bigInteger('stock');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('suppliers');
    }
}
