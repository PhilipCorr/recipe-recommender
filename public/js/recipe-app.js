var recipeApp = angular.module('recipeApp', []);

recipeApp.controller('appController', ['$scope', function($scope){
	$scope.message = "Angular JS is working...";
}])