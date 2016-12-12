recipeApp.controller('indexController',['$scope', 'indexService', function($scope, indexService){ 
	$scope.message = function(){
		indexService.getMessage();
	};
}]);
