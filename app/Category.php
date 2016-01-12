<?php

namespace App;

use Illuminate\Database\Eloquent\Model;


class Category extends Model
{

    /**
     * The database table used by the model.
     *
     * @var string
     */
    protected $table = 'category';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = ['name'];


    /**
     * Return all books by category_id
     */
    public function books()
    {
        return $this->hasMany('App\Books');
    }

}
