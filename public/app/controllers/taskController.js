"use strict";

Books.controller('taskController', ['authService','taskService','$scope','$routeParams','Upload','$timeout',
	function(authService,taskService,$scope,$routeParams,Upload,$timeout){

	$scope.auth_id      = authService.getAuth().id;	
	$scope.task         = {};
	$scope.task.user_id =  $scope.auth_id  
	$scope.task.book_id = $routeParams.singleId;
	$scope.task.user_id = $scope.auth_id;	

	/**
	 * Return book by id
	 */
	taskService.getBookById($routeParams.singleId).success(function(response){
		$scope.book = response;
	});	

	/**
	 * Return all tasks
	 */
	taskService.getAllTask($routeParams.singleId).success(function(response){
		$scope.tasks = response;
	}); 

	/**
	 * Return users tsks
	 */
	taskService.getUsersTask($scope.auth_id).success(function(response){
		$scope.users_task = response;
	}); 	

	/**
	 * Check status of task
	 */
	$scope.usersOfTask = function(id) {
		taskService.usersOfTask(id).success(function(response){
			return response;
		});
	} 	


	/**
	 * Create new book.
	 */
    $scope.createTask = function(newfile) {
    	$('#submit').attr("disabled","disabled");
	    newfile.upload = Upload.upload({
	      url: baseUrl + 'task/create',
	      data: {
	      		src                 : newfile,
	      		user_task           : $scope.task.user_task, 
	      		user_responsibility : $scope.task.user_responsibility, 
	      		title               : $scope.task.title, 
	      		content             : $scope.task.content, 
	      		end_date            : $scope.task.end_date, 
	      		book_id             : $routeParams.singleId, 
	      		user_id             : $scope.auth_id  
	      	}
	    });

	    newfile.upload.then(
	    function (response) 
	    {
	    	$('#submit').removeAttr("disabled");
			console.clear();
			swal("تمت إضافة تاسك جديد","", "success");
			$('#cover').val("");
			$scope.task = "";
			$scope.tasks.push(response.data);
			$timeout(function () {
				newfile.result = response.data;
			});
			if(newfile.progress == 100)
			{
				$('#progress-bar').css('width','0');
			}
	    }
	    , 
	    function (response) 
	    {
	    	$('#submit').removeAttr("disabled");
	    	$('#result').html(response.data);
			if (response.status > 0)
			newfile.errorMsg = response.status + ': ' + response.data;
	    }
	    , 
	    function (evt) {

			newfile.progress = Math.min(100, parseInt(100.0 * evt.loaded / evt.total));
		}
	    );
    }	
	
}])