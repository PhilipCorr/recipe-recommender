var recipeApp = angular.module('recipeApp', ['ngRoute']);

recipeApp.config(['$routeProvider', function($routeProvider){
	$routeProvider.
		when('/',{
			templateUrl: '/partial/indexPartial.html',
			controller: 'indexController'
		}).
		// when('/recipe',{
		// 	templateUrl: 'views/recipe.html',
		// 	controller: 'recipeController'
		// }).
		otherwise({
			redirectTo: '/'
		});
}]);