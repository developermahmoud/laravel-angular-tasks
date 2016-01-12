<?php namespace App;

use Illuminate\Database\Eloquent\Model;

class Books extends Model {

	/**
     * The database table used by the model.
     *
     * @var string
     */
    protected $table = 'books';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $guarded = [];


    /**
     * Return all files of book by book_id
     */
    public function files()
    {
        return $this->hasMany('App\Files','book_id');
    } 


    /**
     * Return all tasks by book_id
     */
    public function task()
    {
        return $this->hasMany('App\Task','book_id');
    }


}
