"use strict";

Books.controller('singlebookController', ['booksService','$routeParams','$scope','Upload','$timeout', 
	function(booksService,$routeParams, $scope,Upload,$timeout){
	

	$scope.book = {};

	/**
	 * Return book by id
	 */
	booksService.getBookById($routeParams.singleId).success(function(response){
		$scope.book = response;
	});


	$scope.hasImage = function(src)
	{
		if( src != '' )
			return true;
		else
			return false;
	}


	/**
	 * Edit book by id.
	 */
	$scope.editBook = function() {
		booksService.editBook($scope.book).success(function(response){
			swal("تم تعديل بيانات الكتاب", "", "success");
			$scope.book = response;
		});
	} 

		

	/**
	 * Create new book.
	 */
    $scope.updateBook = function(file) {
    	if(!file)
    	{
    		$scope.editBook();
    	}
    	else
    	{
    		$('#submit').attr("disabled","disabled");
		    file.upload = Upload.upload({
		      url: baseUrl + 'book/edit',
		      data: {
		      		cover                : file,
		      		category_id          : $scope.book.category_id, 
		      		name                 : $scope.book.name, 
		      		local_number         : $scope.book.local_number, 
		      		international_number : $scope.book.international_number, 
		      		priority             : $scope.book.priority,
		      		id                   : $scope.book.id 
		      	}
		    });

		    file.upload.then(
		    function (response) 
		    {
		    	$('#submit').removeAttr("disabled");
				console.clear();
				swal("تم تعديل بيانات الكتاب", "", "success");
				$('#cover').val("");
				$scope.book = response.data;
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
    }


}])