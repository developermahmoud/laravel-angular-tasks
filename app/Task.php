<?php namespace App;

use Illuminate\Database\Eloquent\Model;

class Task extends Model {

	/**
     * The database table used by the model.
     *
     * @var string
     */
    protected $table = 'task';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $guarded = [];	

    public function usersTask()
    {
        return $this->hasMany('App\UserTask','task_id');
    }

    public function scopeReturnTask($query,$id)
    {
        return 
            $query
                ->select('task.*','books.name as book_name','users.name as user_username')
                ->join('books','books.id','=','task.book_id')
                ->join('users','users.id','=','task.user_id')
                ->where('task.id',$id)
                ->get();
    }
}
