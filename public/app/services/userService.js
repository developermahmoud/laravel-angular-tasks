"use strict";

Books.factory('userService', ['$http',function($http){

	var userService = {};

	/**
	 * Create new user.
	 */
	userService.createUser = function(user) {
		return $http({
			headers : {'Content-Type':"application/json"},
			method  : 'POST',
			data    : user,
			url : 	baseUrl + 'user/create'
		});
	}


	/**
	 * Return user by id. 
	 */
	userService.getUserById = function(id){
		return $http.get(baseUrl +'user/'+id);
	} 

	/**
	 * Create new user.
	 */
	userService.updateUser = function(user) {
		return $http({
			headers : {'Content-Type':"application/json"},
			method  : 'POST',
			data    : user,
			url : 	baseUrl + 'user-edit'
		});
	}	

	/**
	 * Return all users.
	 */
	userService.getAllUsers = function()
	{
		return $http.get(baseUrl +'user');
	} 

	/**
	 * Delete user by id.
	 */
	userService.deleteUser = function(id)
	{
		return $http.delete(baseUrl +'user/delete/'+id);
	} 	



	return userService;

}]);