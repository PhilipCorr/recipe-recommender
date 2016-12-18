
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
			templateUrl: '/partial/filter.html',
			controller: 'filterController'
		})
		.when('/index/list',{
			templateUrl: '/partial/list.html',
			controller: 'listController'
		})
		.when('/index/recipe',{
			templateUrl: '/partial/recipe.html',
			controller: 'filterController'
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

recipeApp.directive('filterUpdate', ['$timeout', function (timer) {
    return {
        link: function (scope, elem, attrs, ctrl) {
            var hello = function () {
                console.info("passed into directive: " + attrs.filterUpdate);
                //angular.forEach(attrs.filterUpdate, function(filterVal){
					//console.log("filterTypes in for loop: " + attrs.filterUpdate[0])
					//console.log("filterType in for loop: " + filterVal)
				// for ( filterType in $scope.filters ) {
				// 	angular.forEach(filterType, function(filterVal){
			      		var myEl = angular.element( document.querySelector( '#' + attrs.filterUpdate ) );
						console.log(myEl)
						myEl.addClass('filter-added');
						myEl.removeClass('btn-filter');   			
		 	// 		});
				// });
            }
            //hello();            
             timer(hello, 0);
        }
    }
}]);

// 		$scope.init = function(filterTypes){
// 			console.log("In init function")

// 			 angular.forEach(filterTypes, function(filterType){
// 				console.log("filterTypes in for loop: " + filterTypes)
// 				console.log("filterType in for loop: " + filterType)
// 			//for ( filterType in $scope.filters ) {
// 				angular.forEach(filterType, function(filterVal){
// 		      		var myEl = angular.element( document.querySelector( '#' + filterVal ) );
// 					console.log(myEl)
// 					myEl.addClass('filter-added');
// 					myEl.removeClass('btn-filter');   			
// 	 			});
// 			});
// 		}

// $scope.removeFilters = function(filterType){
// 			angular.forEach(filterType, function(filterVal){
//       			var myEl = angular.element( document.querySelector( '#' + filterVal ) );
// 				console.log(myEl)
// 				myEl.removeClass('filter-added');
// 				myEl.addClass('btn-filter');   			
 
//    			});
// 			recipeService.removeFilters(filterType);
// 			$scope.filters = recipeService.getFilters()
// 		},