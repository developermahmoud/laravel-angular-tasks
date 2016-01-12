<?php namespace App;

use Illuminate\Database\Eloquent\Model;

class Files extends Model {

    /**
     * The database table used by the model.
     *
     * @var string
     */
    protected $table = 'files';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $guarded = [];

    public function books()
    {
        return $this->belongsTo('App\Books');
    }

}
