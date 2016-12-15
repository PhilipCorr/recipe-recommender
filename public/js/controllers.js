var recipeControllers = angular.module('recipeControllers', []);


// The controller is where we instantiate all of the scope variables.
// It's also where we call the services to do what we want.
// In this case we only have one service to make get requests.
// We may have more later. Depends how much functionality we want to add.
recipeControllers.controller('recipeController', ['$scope', 'recipeService', function($scope, recipeService){
		console.log("Entered recipe Controller")	

		// Instantiate variables that view can see here.
		// Will combine into a single object so that
		// we are only passing a single object to and from the view.
		// $scope.cuisine = "indian"
		// $scope.diet = "paleo"
    
    	$scope.filters =
        {
            "cuisine": "indian",
            "diet": "paleo",
            "number": "10"
        };

		console.log("$scope.diet is " + $scope.filters.diet)
		console.log("$scope.cuisine is " + $scope.filters.cuisine)

		// Method to make get request. Called using ng-click or other ng tags in html.
		// Putting $scope before method or variable makes it available to the view
		$scope.getData = function() {
			console.log("getData method in recipeController now executing...")
			console.log("$scope.diet in getData is " + $scope.filters.diet)
			console.log("$scope.cuisine in getData is " + $scope.filters.cuisine)

			// call method in service
			recipeService.getData($scope.filters);
		}
}]);

recipeControllers.controller('listController',['$scope',  'listService', function($scope, listService){

	    $scope.ingredients = [];
		console.log("$scope.ingredients[0] is " + $scope.ingredients[0])

		console.log("Entered list Controller, about to add ingredient")	
		$scope.addIngredient = function(){
			console.log("addIngredient method in listController now executing...")
			listService.addIngredient($scope.ingredient, $scope.ingredients);
		}
}]);

// recipeControllers.controller('italianController',['$scope', '$http', function($scope, $http){
// 		console.log("Entered Controller, about to make italian call")	
// 		$http.get("/italian").then(function(res){
// 			console.log("successfully made get request")
// 			console.log("Results from request: " + res.data)
// 	    	$scope.recipes = res.data
// 		})
// }]);

// recipeControllers.controller('indianController',['$scope', '$http', function($scope, $http){
// 		console.log("Entered Controller, about to make indian call")	
// 		$http.get("/indian").then(function(res){
// 			console.log("successfully made get request")
// 			console.log("Results from request: " + res.data)
// 	    	$scope.recipes = res.data
// 		})
// }]);

// recipeControllers.controller('irishController',['$scope', '$http', function($scope, $http){
// 		console.log("Entered Controller, about to make irish call")	
// 		$http.get("/irish").then(function(res){
// 			console.log("successfully made get request")
// 			console.log("Results from request: " + res.data)
// 	    	$scope.recipes = res.data
// 		})
// }]);

// recipeControllers.controller('chineseController',['$scope', '$http', function($scope, $http){
// 		console.log("Entered Controller, about to make chinese call")	
// 		$http.get("/chinese").then(function(res){
// 			console.log("successfully made get request")
// 			console.log("Results from request: " + res.data)
// 	    	$scope.recipes = res.data
// 		})
// }]);

// recipeControllers.controller('mexicanController',['$scope', '$http', function($scope, $http){
// 		console.log("Entered Controller, about to make mexican call")	
// 		$http.get("/mexican").then(function(res){
// 			console.log("successfully made get request")
// 			console.log("Results from request: " + res.data)
// 	    	$scope.recipes = res.data
// 		})
// }]);
