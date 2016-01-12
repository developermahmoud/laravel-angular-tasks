"use strict";

Books.controller('navController', ['taskService','authService','$scope', 
	function(taskService,authService,$scope){
		$scope.user_auth = authService.getAuth();
		if($scope.user_auth.permission == 1 || $scope.user_auth.permission == 2)
		{
			$scope.nav_links = true;
		}
		else
		{
			$scope.nav_links = false;
		}

		if(  $scope.user_auth.permission == 1 )
		{
			$scope.nav_users = true;
		}
		else
		{
			$scope.nav_users = false;
		}

		taskService.countTasks($scope.user_auth.id).success(function(resopnse){
			$scope.countTask = resopnse; 
		});

}])