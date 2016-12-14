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
			controller: 'recipeController'
		})
		// .when('/index/american',{
		//  	templateUrl: 'partial/indexPartial.html',
		//  	controller: 'americanController'
		//  })
		// .when('/index/italian',{
		//  	templateUrl: 'partial/indexPartial.html',
		//  	controller: 'italianController'
		//  })
		// .when('/index/indian',{
		//  	templateUrl: 'partial/indexPartial.html',
		//  	controller: 'indianController'
		//  })
		// .when('/index/irish',{
		//  	templateUrl: 'partial/indexPartial.html',
		//  	controller: 'irishController'
		//  })
		// .when('/index/chinese',{
		//  	templateUrl: 'partial/indexPartial.html',
		//  	controller: 'chineseController'
		//  })
		// .when('/index/mexican',{
		//  	templateUrl: 'partial/indexPartial.html',
		//  	controller: 'mexicanController'
		//  })
		.otherwise({
			redirectTo: '/index'
		});

	$locationProvider.html5Mode(true);
	// $locationProvider.hashPrefix('!');

});