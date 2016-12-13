var recipeApp = angular.module('recipeApp', ['ngRoute','recipeControllers']);

 // recipeApp.config(['$locationProvider', function ($locationProvider) {

	// if (window.history && window.history.pushState) {
 //        $locationProvider.html5Mode({
 //            enabled: true,
 //            requireBase: true,
 //            rewriteLinks: false
 //        });
 //    }	
 //    else {
 //        $locationProvider.html5Mode(false);
 //    }
 // }]);

recipeApp.config(function($routeProvider, $locationProvider){
	$routeProvider
		.when('/index',{
			templateUrl: '/partial/indexPartial.html',
			controller: 'indexController'
		})
		.when('/index/american',{
		 	templateUrl: 'partial/indexPartial.html',
		 	controller: 'americanController'
		 })
		.otherwise({
			redirectTo: '/index'
		});

	$locationProvider.html5Mode(true);
	// $locationProvider.hashPrefix('!');

});