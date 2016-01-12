"use strict";

Books.controller('singleUsersController', ['userService','$routeParams','$scope',
	function(userService,$routeParams, $scope){
	

	$scope.user = {};

	/**
	 * Return book by id
	 */
	userService.getUserById($routeParams.singleId).success(function(response){
		$scope.user = response;
		$scope.user.password = "";
	});



	/**
	 * Edit  user
	 */	
	$scope.updateUser =  function() {
		userService.updateUser($scope.user)
		.success(function(response){
			swal("تم تعديل بيانات الوظف", response.name, "success");
		});
	}

}])