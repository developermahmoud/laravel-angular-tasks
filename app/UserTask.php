<?php namespace App;

use Illuminate\Database\Eloquent\Model;

class UserTask extends Model {

	/**
     * The database table used by the model.
     *
     * @var string
     */
    protected $table = 'user_task';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $guarded = [];	


    public function scopeReturUsers($query,$id)
    {
        return 
            $query
                ->select('user_task.*','users.name as username')
                ->join('users','users.id','=','user_task.user_id')
                ->join('task','task.id','=','user_task.task_id')
                ->where('user_task.task_id',$id)
                ->orderBy('updated_at','desc')
                ->get();
    }

    /** 
     * Return count of tasks
     */
    public function scopeCountTasks($query, $id)
    {
        return 
            $query
                ->where('user_id',$id)
                ->where('status',0)
                ->get();
    }

    /**
     * Return tasks of user by id 
     */
    public function scopeUserTasks($query,$id,$status)
    {
        return 
            $query
                ->select('user_task.id','users.name as user_task_name','task.title as task_title','books.name as book_name','task.date_created','task.end_date')
                ->join('task','task.id','=','user_task.task_id')
                ->join('users','users.id','=','user_task.user_task')
                ->join('books','books.id','=','user_task.book_id')
                ->where('user_task.user_id',$id)
                ->where('user_task.status',$status)
                ->get();
    }

    /**
     * Return tasks by id 
     */
    public function scopeTaskById($query,$id,$task)
    {
        return 
            $query
                ->select('user_task.status','users.name as user_task_name','task.content','task.src','task.title as task_title','books.name as book_name','task.date_created','task.end_date')
                ->join('task','task.id','=','user_task.task_id')
                ->join('users','users.id','=','user_task.user_task')
                ->join('books','books.id','=','user_task.book_id')
                ->where('user_task.user_id',$id)
                ->where('user_task.id',$task)
                ->get();
    }    

}
