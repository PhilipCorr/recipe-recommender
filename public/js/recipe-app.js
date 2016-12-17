
// link config and routes up to recipeApp
var recipeApp = angular.module('recipeApp', ['ngRoute', 'ngAnimate', 'recipeControllers']);

// This config specifies routes to inject into ng-view. 
// This means that when the view tells the url to change (using ng-href tag),
// it will be picked up here and when the url matches one of these routes the
// template html will be injected in. The controller specified will also be executed,
// meaning that the scope variables will be initialised.
// Only one route for now. May need to add a new one for specific recipes and/or shopping list.
// otherwise is executed if url doesn't match one of the provided routes.
// In this case otherwise is just pointing to /index anyway so 100% of the time
// /index route is called
recipeApp.config(function($routeProvider, $locationProvider){
	$routeProvider
		.when('/index',{
			templateUrl: '/partial/home.html',
			controller: 'recipeController'
		})
		.when('/index/recipes',{
			templateUrl: '/partial/recipes.html',
			controller: 'recipeController'
		})
		.when('/index/list',{
			templateUrl: '/partial/list.html',
			controller: 'listController'
		})
		.when('/index/specificrecipe',{
			templateUrl: '/partial/specificRecipe.html',
			controller: 'recipeController'
		})
		.otherwise({
			redirectTo: '/index'
		});

	// may need this for routes
	// not sure yet. This changes how the url is created when ng-href is used
	// The url needs to match route perfectly else won't work.
	$locationProvider.html5Mode(true);

});

recipeApp.filter('capitalize', function() {
    return function(input) {
      return (!!input) ? input.charAt(0).toUpperCase() + input.substr(1).toLowerCase() : '';
    }
});

