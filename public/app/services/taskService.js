"user strict";

Books.factory('taskService', ['$http', 
	function($http){

	var taskService = {};

	/**
	 * Return books by category id.
	 */
	taskService.getBookById = function(id) {

		return $http.get(baseUrl + 'book/id/' + id);
	}

	/**
	 * Reurn all users of task.
	 */
	taskService.getUsersTask = function(auth_id) {
		return $http.get(baseUrl + 'users-task/' + auth_id);
	}

	/**
	 * Send new task.
	 */
	taskService.sendTask = function(task)
	{
		var fd = new FormData();
			for(var key in task) {
			fd.append(key, task[key]);
		}
		return $http.post(baseUrl + 'task/create', fd, {
				transformRequest: angular.indentity,
				headers: {'Content-Type': undefined}
		});
	} 

	/**
	 *  Return all tasks of book.
	 */
	taskService.getAllTask = function (id){
		return $http.get(baseUrl + 'tasks/book/' +id);
	}


	/**
	 * Return users task.
	 */
	taskService.getUsersOfTask = function(id)
	{
		return $http.get(baseUrl + 'task/users/' + id);
	} 


	/**
	 * Check tasks found or no.
	 */
	taskService.countTasks = function(id)
	{
		return $http.get(baseUrl + 'count-tasks/' + id);
	} 

	/**
	 * Check tasks found or no.
	 */
	taskService.getTasks = function(id,status)
	{
		return $http.get(baseUrl + 'get-tasks/' + id + '/' + status);
	} 	

	/**
	 * get Task By Id.
	 */
	taskService.getTaskDataById = function(id,task)
	{
		return $http.get(baseUrl + 'get-task-by-id/' + id + '/' + task);
	} 

	/**
	 * get user responsibiltiy.
	 */
	taskService.getResponsibility = function(id)
	{
		return $http.get(baseUrl + 'get-user-responsibility/'+ id);
	} 	

	/**
	 * get Task By Id.
	 */
	taskService.getTaskById = function(id,task)
	{
		return $http.get(baseUrl + 'get-tasks-by-id/' + id + '/' + task);
	} 	

	/**
	 * Update task status.
	 */
	taskService.updateTaskStatus = function(id,task,status)
	{
		return $http.get(baseUrl + 'update-task/' + id + '/' + task + '/' + status);
	} 		

	/**
	 * Task done.
	 */	
	taskService.statusDone = function(data)
	{
		var fd = new FormData();
			for(var key in data) {
			fd.append(key, data[key]);
		}
		return $http.post(baseUrl + 'task-done', fd, {
				transformRequest: angular.indentity,
				headers: {'Content-Type': undefined}
		});
	} 

	/**
	 * Change status to  
	 */

	/**
	 * Close task.
	 */
	taskService.closeTask = function(id) {
		return $http.get(baseUrl + 'close-task/' + id);
	} 
	return taskService;	


}])