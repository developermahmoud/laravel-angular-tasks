"use strict";

Books.factory('categoryService', ['$http',function($http){
	
	var categoryService	 = {};

	/**
	 * Return all categorys
	 */
	categoryService.returnAllCategory = function() {
		return $http.get(baseUrl + 'category');
	}

	/**
	 * Create new category
	 */
	categoryService.createNewCategory = function(category) {
		return $http({
				headers : {'Content-Type':'appliction/json'},
				data : category,
				method : 'POST',
				url : 	baseUrl + 'category/create'
			});
	} 

	/**
	 * Edit category by id
	 */
	categoryService.editCategory = function(category) {
		return $http({
				headers : {'Content-Type':'application/json'},
				data: category,
				method: 'PUT',
				url : baseUrl + 'category/update'
			});
	} 

	/**
	 * Delete category by id.
	 */
	categoryService.deleteCategory = function(id) {
		return $http.delete(baseUrl + 'category/delete/'+id);
	} 

	return categoryService;

}])