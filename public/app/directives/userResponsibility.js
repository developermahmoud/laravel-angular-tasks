"use strict";

Books.directive('userResponsibility', ['$http',function ($http) {
	return {
		restrict: 'E',	
		link: function (s, e, a) {
			$http.get('get-user-responsibility/'+a.id).success(function(response){
				s.name = response;
			});
		},
		template : "{{name}}"
	};
}])