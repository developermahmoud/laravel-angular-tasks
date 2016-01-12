"use strict";

Books.controller('booksController', ['categoryService','booksService','$scope','Upload','$timeout',
	function(categoryService,booksService,$scope,Upload,$timeout){
	
	$scope.book = {}	

	/**
	 * Create new book.
	 */
    $scope.createBook = function(file) {

    	$('#submit').attr("disabled","disabled");

	    file.upload = Upload.upload({
	      url: baseUrl + 'book/create',
	      data: {
	      		cover                : file,
	      		category_id          : $scope.book.category_id, 
	      		name                 : $scope.book.name, 
	      		local_number         : $scope.book.local_number, 
	      		international_number : $scope.book.international_number, 
	      		priority             : $scope.book.priority 
	      	}
	    });

	    file.upload.then(
	    function (response) 
	    {
	    	$('#submit').removeAttr("disabled");
			console.clear();
			swal("تمت إضافة كتاب جديد", response.data, "success");
			$('#cover').val("");
			$scope.book = "";
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
	
	/**
	 * Return all category.
	 */	
	categoryService.returnAllCategory().success(function(response){
		$scope.categorys = response;
	});

	/**
	 * Return books by category id.
	 */
	$scope.getBooksByCategoryId = function(book) {
		booksService
		.getBooksByCategoryId(book.category_id).success(function(response){
			$scope.books = response;
		})
	} 

}])