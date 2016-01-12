"use strict";

Books.controller('singleUserTaskController', ['taskService','authService','$scope','$routeParams','Upload','$timeout',
	function(taskService,authService,$scope,$routeParams,Upload,$timeout){
		
	$scope.user_auth = authService.getAuth();

	
	taskService.getTaskById($scope.user_auth.id,$routeParams.singleId).success(function(resopnse){
		$scope.task = resopnse; 
	});
	

	/**
	 * Change status to prossess.
	 */
	$scope.changeStatus = function()
	{
		taskService.updateTaskStatus($scope.user_auth.id,$routeParams.singleId,'2').success(function(response){
			$scope.task[0].status = 2;
		});
	} 

	$scope.user_task      = {};
	$scope.user_task.id   = $scope.user_auth.id;
	$scope.user_task.task = $routeParams.singleId;

	/**
	 * Change Status to done.
	 */
	$scope.statusDone = function()
	{
		taskService.statusDone($scope.user_task).success(function(response){
			$scope.task[0].status = 3;
		});
	} 

	/**
	 * Create new book.
	 */
    $scope.closeTask = function(file) {
    	$('#submit').attr("disabled","disabled");
	    file.upload = Upload.upload({
	      url: baseUrl + 'task-done',
	      data: {
	      		src      : file,
	      		content  : $scope.user_task.content, 
	      		id       : $scope.user_task.id, 
	      		task     : $scope.user_task.task
	      	}
	    });

	    file.upload.then(
	    function (response) 
	    {
	    	$('#submit').removeAttr("disabled");
			console.clear();
			$scope.task[0].status = 3;
			$timeout(function () {
				file.result = response.data;
			});
			if(file.progress == 100)
			{
				$('#progress-bar').css('width','0');
			}
	    }
	    , 
	    function (response) 
	    {
	    	$('#submit').removeAttr("disabled");
	    	$('#result').html(response);
			if (response.status > 0)
			file.errorMsg = response.status + ': ' + response.data;
	    }
	    , 
	    function (evt) {

			file.progress = Math.min(100, parseInt(100.0 * evt.loaded / evt.total));
		}
	    );
    }	


}])