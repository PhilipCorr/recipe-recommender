var recipeApp = angular.module('recipeApp', ['ngRoute']);

recipeApp.config(['$routeProvider', function($routeProvider){
	$routeProvider.
		when('/',{
			templateUrl: '/partial/indexPartial.html',
			controller: 'indexController'
		}).
		 when('/american',{
		 	templateUrl: 'partial/indexPartial.html',
		 	controller: 'americanController'
		 }).
		otherwise({
			redirectTo: '/'
		});
}]);