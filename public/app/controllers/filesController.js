"use strict";


Books.controller('filesController', ['filesService','booksService','$scope','$routeParams','Upload','$timeout',
	function(filesService,booksService,$scope,$routeParams,Upload,$timeout){
		

	/**
	 * Return book by id
	 */
	booksService.getBookById($routeParams.singleId).success(function(response){
		$scope.book = response;
	});

	$scope.file = {};


	$scope.disabledButtonUpdate = true;
	$scope.disabledButtonAdd    = false;

	/**
	 * Return files by book_id
	 */
	filesService.getfilesById($routeParams.singleId).success(function(response){
		$scope.files = response;
	});	


	/**
	 * Create new book.
	 */
    $scope.createFile = function(newfile) {
    	$('#submit').attr("disabled","disabled");
	    newfile.upload = Upload.upload({
	      url: baseUrl + 'file/create',
	      data: {
	      		src        : newfile,
	      		date_store : $scope.file.date_store, 
	      		notes      : $scope.file.notes, 
	      		book_id    : $routeParams.singleId, 
	      	}
	    });

	    newfile.upload.then(
	    function (response) 
	    {
	    	$('#submit').removeAttr("disabled");
			console.clear();
			swal("تمت إضافة كتاب جديد", "", "success");
			$('#cover').val("");
			$scope.file = "";
			$scope.files.push(response.data);
			$timeout(function () {
				newfile.result = response.data;
			});
			if(newfile.progress == 100)
			{
				$('#progress-bar').css('width','0');
			}
	    }
	    , 
	    function (response) 
	    {
	    	$('#submit').removeAttr("disabled");
	    	$('#show_result').html(response);
			if (response.status > 0)
			newfile.errorMsg = response.status + ': ' + response.data;
	    }
	    , 
	    function (evt) {

			newfile.progress = Math.min(100, parseInt(100.0 * evt.loaded / evt.total));
		}
	    );
    }	


	/**
	 * Edit file
	 */
	$scope.editFile = function(i,id) {

	$scope.disabledButtonUpdate = false;
	$scope.disabledButtonAdd    = true;

		filesService.editFile(id).success(function(response){
			$scope.file = response;
		});
	} 

	/**
	 * Update filr 
	 */
	$scope.updateFile = function(file) {
		filesService.updateFile(file).success(function(response){
			$scope.file  = "";
			$scope.files = response;
			swal("تم التعديل", "", "success");
			$scope.disabledButtonUpdate = true;
			$scope.disabledButtonAdd    = false;			
		});
	} 

	/**
	 * Delete file by id.
	 */
	$scope.deleteFile = function(i,file) { 

		swal({   
				title: "هل ترغب فى الحذف؟",   
				text: file.date_store,   
				type: "warning",   
				showCancelButton: true,   
				confirmButtonColor: "#DD6B55",   
				confirmButtonText: "نعم, إحذف",   
				closeOnConfirm: false 
			}, 
			function() { 
				filesService.deleteFile(file.id).success(function(){
					$scope.files.splice(i,1);
				});					
				swal("تم الحذف!", "", "error"); 
			}
		);
	} 
	 


}]);