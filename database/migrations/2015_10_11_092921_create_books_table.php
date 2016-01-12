<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateBooksTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('books', function(Blueprint $table)
		{
			$table->increments('id');
			$table->string('name');
			$table->string('local_number');
			$table->string('international_number');
			$table->string('priority');
			$table->enum('status',['yes','no']);
			$table->string('cover');
			$table->integer('category_id')->unsigned();
			$table->foreign('category_id')->references('id')->on('category')->onDelete('CASCADE');
			$table->timestamps();
		});
	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('books');
	}

}
