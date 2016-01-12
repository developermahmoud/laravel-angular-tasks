"use strict";

Books.controller('usersController',['userService','$scope','$http','$location','$cookies',
	function(userService,$scope,$http,$location,$cookies){

	/**
	 * User object.
	 */	
	$scope.user = {};

	/**
	 * Add new user
	 */	
	$scope.createUser =  function() {
		userService.createUser($scope.user)
		.success(function(response){
			swal("تمت اضافة موظف جديد", response.name, "success");
			$scope.users.push(response);
			$scope.user = "";
		})
		.error(function(err,status,headers){
			if( err.name )
			{
				swal("أكتب الاسم من فضلك", "", "error");
			}

			if( err.email )
			{
				swal("أكتب الريد الألكترونى", "", "error");
			}			

			if( err.password )
			{
				swal("أكتب الرقم السرى", "", "error");
			}			
		});
	}


	/**
	 * Return all users 
  	 */
  	userService.getAllUsers().success(function(response){
  		$scope.users  = response;
  	}); 


	/**
	 * Delete users 
	 */	
	$scope.deleteUser = function(i,user) {

			swal({   
					title: "هل ترغب فى الحذف؟",   
					text: user.name,   
					type: "warning",   
					showCancelButton: true,   
					confirmButtonColor: "#DD6B55",   
					confirmButtonText: "نعم, إحذف",   
					closeOnConfirm: false 
				}, 
				function() {   
					userService.deleteUser(user.id)
					.success(function(response){
						$scope.users.splice($scope.users.indexOf(user),1);
						swal("تم الحذف!", "", "success"); 
					});										
					
				}
			);
	} 

	/**
	 * Login
	 */
	$scope.login = function(dataLogin) {
		$http({
			headers : {'Content-Type':'appliction/json'},
			data : dataLogin,
			method : 'POST',
			url : 	baseUrl + 'login'
		})
		.success(function(response){
			$cookies.put('auth',JSON.stringify(response));
			$location.path('/home');
		})
		.error(function(err, stauts, headers){
			swal(err, "", "error"); 
		});
	}

	/**
	 * Logout
	 */
	$scope.Logout = function() {
		$cookies.remove('auth');
		$location.path('/');
	}	

}]);