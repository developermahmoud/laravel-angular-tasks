"use strict";

Books.controller('categoryController',['categoryService','$scope',
	function(categoryService,$scope){


		/**
		 * Return all category
		 */
		categoryService.returnAllCategory().success(function(response){
			$scope.categorys = response;	
		}); 

		/**
		 * Category object.
		 */
		$scope.category = {};

		/**
		 * Create new category
		 */
		$scope.createCategory = function() {

			categoryService.createNewCategory($scope.category)
			.success(function(response){
				swal("تمت إضافة قسم جديد", $scope.category.name, "success");
				$scope.category = "";
				$scope.categorys.push(response);
			})
			.error(function(err, stauts, headers){
				if(err.name) {
					swal("أكتب اسم القسم من فضلك", "", "error");
				}
			});		
		}

		/**
		 * Edit category 
		 */
		$scope.editCategory = function(category) {
			categoryService.editCategory(category)
			.success(function(response){
				swal(response, "", "success");
			});
		}

		/**
		 * Delete category by id
		 */
		$scope.deleteCategory = function(i,category) {
			swal({   
					title: "هل ترغب فى الحذف؟",   
					text: category.name,   
					type: "warning",   
					showCancelButton: true,   
					confirmButtonColor: "#DD6B55",   
					confirmButtonText: "نعم, إحذف",   
					closeOnConfirm: false 
				}, 
				function() {   
					categoryService.deleteCategory(category.id)
					.success(function(response){
						$scope.categorys.splice($scope.categorys.indexOf(category),1);
					}); 					
					swal("تم الحذف!", "", "success"); 
				}
			);
		}
}]);