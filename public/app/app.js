"use strict";

var Books = angular.module('Books',['ngRoute','ngAnimate','ngCookies','ui.bootstrap','ngFileUpload']);

Books.config(['$routeProvider',function($routeProvider){

	/**
	 * Login page.
	 */
	$routeProvider
		.when('/',{
			templateUrl : 'public/partial/login.html',
			controller  : 'usersController'
		});	

	/**
	 * Logout page.
	 */
	$routeProvider
		.when('/logout',{
			templateUrl : 'public/partial/logout.html',
			controller  : 'usersController'
		});	

	/**
	 * Homepage.
	 */
	$routeProvider
		.when('/home',{
			templateUrl :'public/partial/home.html',
			controller : 'homeController'
		});

	/**
	 * Category page
	 */
	$routeProvider
		.when('/category',{
			templateUrl :'public/partial/category/category.html',
			controller : 'categoryController'
		});	

	/**
	 * Create new book.
	 */	
	$routeProvider
		.when('/book/create',{
			templateUrl :'public/partial/books/create_book.html',
			controller : 'booksController'
		});	

	/**
	 * Show books by category id.
	 */
	$routeProvider
		.when('/book',{
			templateUrl :'public/partial/books/show_books.html',
			controller : 'booksController'
		});						


	/**
	 * Show book by id.
	 */	
	$routeProvider
		.when('/book/id/:singleId',{
			templateUrl :'public/partial/books/book.html',
			controller : 'singlebookController'
		});		

	/**
	 * Show all files of book.
	 */	
	$routeProvider
		.when('/files/id/:singleId',{
			templateUrl :'public/partial/files/files.html',
			controller : 'filesController'
		});		

		
	$routeProvider
		.when('/users',{
			templateUrl :'public/partial/users/user.html',
			controller : 'usersController'
		});	

	$routeProvider
		.when('/user/:singleId',{
			templateUrl :'public/partial/users/show_user.html',
			controller : 'singleUsersController'
		});			

	$routeProvider
		.when('/task/book-id/:singleId',{
			templateUrl :'public/partial/task/task.html',
			controller : 'taskController'
		});	

	$routeProvider
		.when('/task/:singleId',{
			templateUrl :'public/partial/task/show_task.html',
			controller : 'singleTaskController'
		});		

	$routeProvider
		.when('/users/tasks',{
			templateUrl :'public/partial/task/user_task.html',
			controller : 'userTaskController'
		});	

	$routeProvider
		.when('/show-task/:singleId',{
			templateUrl :'public/partial/task/show_task_user.html',
			controller : 'singleUserTaskController'
		});										



	$routeProvider.otherwise({redirectTo:'/'});	

}]);


/**
 * Route authenticated
 */
Books.run(['$rootScope','$location','authService',function($rootScope,$location,authService){
		
		$rootScope.$on('$routeChangeStart',function(event, next, current){
			
			if( $location.path() != '/' && !authService.checkAuth() )
			{
				$location.path('/');
			}

			if( $location.path() == '/' && authService.checkAuth() )
			{
				$location.path('/home');
			}

		});

}]); 