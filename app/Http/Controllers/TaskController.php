<?php namespace App\Http\Controllers;

use App\Http\Requests;
use App\Http\Controllers\Controller;

use Illuminate\Http\Request;
use App\User;
use App\Task;
use App\Books;
use App\UserTask;
use Auth;
use File;

class TaskController extends Controller {

	/**
	 * Create new task
	 */
	public function store(Request $request, Task $task, UserTask $user_task)
	{

		if( $request->hasFile('src') )
		{
			$filename = substr(md5(time()),0,20).'.'.$request->file('src')->getClientOriginalExtension(); 
	    	$request->file('src')->move(base_path().'/public/upload',$filename);
		}
		else
		{
			$filename = "";
		}

		/**
		 * Create task
		 */
    	$task->title               = $request->title ? : '';
    	$task->content             = $request->content ? : '';
    	$task->end_date            = date('Y-m-d',strtotime($request->end_date));
    	$task->user_id             = $request->user_id;
    	$task->book_id             = $request->book_id;
    	$task->user_responsibility = $request->user_responsibility ? : 0;
    	$task->status      		   = 0;
    	$task->date_created 	   = date('Y-m-d');
    	$task->src          	   = $filename;
    	$task->save();


    	/**
    	 * Create users tasks
    	 */
    	foreach( $request->user_task  as $k => $v ) {
    		$users_task[$k]['status']     = 0;
    		$users_task[$k]['src']        = "";
    		$users_task[$k]['content']    = "";
    		$users_task[$k]['close_date'] = "";
    		$users_task[$k]['task_id']    = $task->id;
    		$users_task[$k]['user_id']    = $v;
    		$users_task[$k]['book_id']    = $request->book_id;
    		$users_task[$k]['user_task']  = $request->user_id;
    	}
    	UserTask::insert($users_task);
 		return response($task,'202');
	}

	/**
	 * Return all users task
	 */
	public function getUsersTask($auth_id)
	{
		return User::where('id','<>',$auth_id)->get();
	}

	/**
	 * Return all by book_id
	 */
	public function returnAllByBookId($id)
	{
		return Books::find($id)->task;
	}

	/**
	 * Return task by id
	 */
	public function returnTaskById($id)
	{
		return Task::ReturnTask($id);
	}

	/**
	 * Return all users of tasks
	 */
	public function usersOfTasks($id)
	{
		return UserTask::ReturUsers($id);
	}

	/**
	 * Count tasks
	 */
	public function countTasks($id)
	{
		return count(UserTask::CountTasks($id));
	}

	/**
	 * Return tasks
	 */
	public function getTasks($id,$status)
	{
		return UserTask::UserTasks($id,$status);
	}

	/**
	 * Return data of task
	 */
	public function reTurnDataOfTask($id,$task)
	{
		return Task::ReturnTask($task);
	}

	/**
	 * Get task by id
	 */
	public function getTaskById($id,$task)
	{
		$user_task = UserTask::find($task);
		if( $user_task->user_id == $id && $user_task->status == 0)
		{
			$user_task->status = 1;
			$user_task->save();
		} 		


		return UserTask::TaskById($id,$task);
	}

	/**
	 * Update status task
	 */
	public function updateTaskStatus($id,$task,$status)
	{
		$user_task = UserTask::find($task);
		$user      = User::find($id);
		if( $user_task->user_id == $id )
		{
			$user_task->status = $status;
			$user_task->save();
		} 
		elseif($user->permission == 1)
		{
			if( File::exists( 'public/upload/'.$user_task->src ))
			{
				File::delete('public/upload/'.$user_task->src );
			}			
			$user_task->status  = $status;
			$user_task->content = ""; 
			$user_task->src     = ""; 
			$user_task->save();
		}
	}

	/**
	 * Task done. 
	 */
	public function taskDone(Request $request)
	{
		$user_task = UserTask::find($request->task);
		if( $user_task->user_id == $request->id )
		{	

			if( $request->hasFile('src') )
			{
				$filename = substr(md5(time()),0,20).'.'.$request->file('src')->getClientOriginalExtension(); 
		    	$request->file('src')->move(base_path().'/public/upload',$filename);
			}
			else
			{
				$filename = "";
			}
			$user_task->content    = $request->content;
			$user_task->src        = $filename;
			$user_task->status     = 3;
			$user_task->close_date = date('Y-m-d');
			$user_task->save();
		} 
		
	}

	/**
	 * Close task. 
	 */
	public function closeTask($id, Task $task) {
		$task = Task::find($id);
		$task->status = 1;
		$task->save();
	}

}
