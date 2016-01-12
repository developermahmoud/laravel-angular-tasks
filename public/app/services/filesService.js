"use strict";


Books.service('filesService', ['$http', function($http){
	var filesService = {};

	/**
	 * Return all files by book_id.
	 */
	filesService.getfilesById = function(id) {
		return $http.get(baseUrl+'files/book/'+id);
	}

	/**
	 * Edit file
	 */
	filesService.editFile = function(id) {
		return $http.get(baseUrl+'file/'+id);
	} 

	/**
	 * Update file
	 */
	filesService.updateFile = function(file) {
		return $http({
				headers : {'Content-Type':'appliction/json'},
				data : file,
				method : 'POST',
				url : 	baseUrl + 'file/update'
			})
	} 	

	/**
	 * Delete files.
	 */
	filesService.deleteFile = function(id) {
		return $http.delete('file/delete/'+id);
	}
	
	return filesService;	
}])