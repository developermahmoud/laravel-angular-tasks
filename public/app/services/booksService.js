"use strict";

Books.factory('booksService', ['$http', function($http){

	var booksService = {};

		/**
		 * Return books by category id 
		 */
		booksService.getBooksByCategoryId = function(id) {
			return $http.get(baseUrl + 'books/category-id/'+id);
		}

		/**
		 * Return book by id
		 */
		booksService.getBookById = function(id) {
			return $http.get(baseUrl + 'book/id/' + id);
		} 

		/**
		 * Edit Book by id
		 */
		booksService.editBook = function(book) {
			var fd = new FormData();
				for(var key in book) {
				fd.append(key, book[key]);
			}
			return $http.post(baseUrl + 'book/edit', fd, {
					transformRequest: angular.indentity,
					headers: {'Content-Type': undefined}
			});
		} 

	return booksService;
}])