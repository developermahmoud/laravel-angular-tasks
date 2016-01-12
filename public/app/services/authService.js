"use strict";

Books.factory('authService',['$cookies','$location',function($cookies,$location){

	var authService = {};

	/**
	 * return  user authenticated
	 */
	authService.getAuth = function()
	{
		return angular.fromJson($cookies.get('auth'));
	}

	/**
	 * Check authenticated
	 */
	authService.checkAuth = function()
	{
		if($cookies.get('auth')) return true;
		else return false;
	} 

	return authService;
}]);