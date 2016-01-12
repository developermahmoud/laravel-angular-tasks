"use strict";

Books.controller('userTaskController', ['taskService','authService','$scope', 
	function(taskService,authService,$scope){
		$scope.user_auth = authService.getAuth();

		taskService.getTasks($scope.user_auth.id,'0').success(function(resopnse){
			$scope.wait_tasks = resopnse; 
		});

		taskService.getTasks($scope.user_auth.id,'1').success(function(resopnse){
			$scope.resive_tasks = resopnse; 
		});


		taskService.getTasks($scope.user_auth.id,'2').success(function(resopnse){
			$scope.progress_tasks = resopnse; 
		});

		taskService.getTasks($scope.user_auth.id,'3').success(function(resopnse){
			$scope.done_tasks = resopnse; 
		});		


}])