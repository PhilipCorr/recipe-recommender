// link components under unified module recipeApp
var recipeApp = angular.module('recipeApp', ['ngRoute']);

// When URL matches angular route change template and controller
recipeApp.config(function($routeProvider, $locationProvider){
	$routeProvider
	.when('/index',{
		templateUrl: '/partial/recipes.html',
		controller: 'recipeController'
	})
	.when('/index/list',{
		templateUrl: '/partial/list.html',
		controller: 'listController'
	})
	.when('/index/details',{
		templateUrl: '/partial/details.html',
		controller: 'recipeController'
	})
	.otherwise({
		redirectTo: '/index'
	});

	// changes how the url is altered when ng-href is called
	$locationProvider.html5Mode(true);

});


// custom filter for capitalizing variables displayed in view
recipeApp.filter('capitalize', function() {
	return function(input) {
		return (!!input) ? input.charAt(0).toUpperCase() + input.substr(1).toLowerCase() : '';
	}
});

// custom directive to apply styles after content loads
recipeApp.directive('filterUpdate', ['$timeout', function (timer) {
	return {
		link: function (scope, elem, attrs, ctrl) {
			var applyFilterStyle = function () {
				var myEl = angular.element( document.querySelector( '#' + attrs.filterUpdate ) );
				myEl.addClass('filter-added');
				myEl.removeClass('btn-filter');   			
			}
            // set delay to add directive to priority queue after view render
            timer(applyFilterStyle, 0);
        }
    }
}]);

// custom directive to load alert after view loads
recipeApp.directive('alertNeeded', ['$timeout', function (timer) {
	return {
		link: function (scope) {
			var alertUpdate = function () {
				scope.alertNeeded = true; 			
			}

            // set delay to add directive to priority queue after view render
            timer(alertUpdate, 1000);
        }
    }
}]);
