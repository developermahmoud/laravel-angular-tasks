"use strict";

Books.controller('singleTaskController', ['authService','taskService','$scope','$routeParams',
	function(authService,taskService,$scope,$routeParams){
	
	$scope.user_auth = authService.getAuth();
	
	$scope.task = {};	

	$scope.close_task = false;

	if( $scope.user_auth.permission == 1 )
	{
		$scope.close_task = true;
	}
	
	/**
	 * Return task by id
	 */
	taskService.getTaskDataById($scope.user_auth.id,$routeParams.singleId).success(function(response){
		$scope.task = response;
	});		


	/**
	 * Return users of task
	 */
	$scope.show_all = function() {
		taskService.getUsersOfTask($routeParams.singleId).success(function(response){
			$scope.users_task = response;
		});
	}	

	$scope.show_all();

	/**
	 * Close task.
	 */
	$scope.closeTask = function() { 
		taskService.closeTask($routeParams.singleId).success(function(response){
			swal("تم إغلاق التاسك", "", "success");
			$scope.task[0].status = 1;
		});	
	} 
	

	/**
	 * Change Status 
	 */		
	$scope.cancelStatus = function(user) {
		taskService.updateTaskStatus($scope.user_auth.id,user.id,2).success(function(response){
			$scope.show_all();
		});	
	} 

}])