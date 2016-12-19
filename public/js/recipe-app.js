
// link config and routes up to recipeApp
var recipeApp = angular.module('recipeApp', ['ngRoute']);

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
                console.info("passed into directive: " + attrs.filterUpdate);
			      		var myEl = angular.element( document.querySelector( '#' + attrs.filterUpdate ) );
						console.log(myEl)
						myEl.addClass('filter-added');
						myEl.removeClass('btn-filter');   			
            }
             timer(applyFilterStyle, 0);
        }
    }
}]);
