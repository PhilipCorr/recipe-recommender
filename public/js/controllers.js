var recipeControllers = angular.module('recipeControllers', []);


// The controller is where we instantiate all of the scope variables.
// It's also where we call the services to do what we want.
// In this case we only have one service to make get requests.
// We may have more later. Depends how much functionality we want to add.

recipeControllers.controller('mainController',['$scope', 'recipeService', function($scope, recipeService){
		$scope.filters = recipeService.getFilters();
		$scope.recipes = recipeService.getRecipes();
		$scope.cuisineTypes = ["none", "irish","indian","chinese","american","italian","mexican"];

		$scope.addFilters = function(){
			console.log("addFilters method in MainController now executing...")
			recipeService.addFilter($scope.filters);
			$scope.filters = recipeService.getFilters()
		},

		$scope.getData = function() {
			console.log("getData method in recipeController now executing...")

			// call method in service
			recipeService.getData()
			.then(function(response){
				$scope.recipes = response;
				$scope.submittedSearch='true'
			});
		}
}]);

recipeControllers.controller('recipeController', ['$scope', 'recipeService', function($scope, recipeService){
		console.log("Entered recipe Controller")	
		$scope.chosenRecipe = recipeService.getChosenRecipe();

		// Instantiate variables that view can see here.
		// Will combine into a single object so that
		// we are only passing a single object to and from the view.


		// Method to make get request. Called using ng-click or other ng tags in html.
		// Putting $scope before method or variable makes it available to the view

		// $scope.setChosenRecipe = function(index){
		// 	console.log("setChosenRecipe method in recipeController now executing...")
		// 	$scope.chosenrecipe = recipeService.setChosenRecipe(index);

		// }
		$scope.getDetailedData = function(id){
			console.log("getDetailedData method in recipeController now executing...")
			recipeService.getDetailedData(id)
			.then(function(response){
				$scope.chosenRecipe[0] = response;
				console.log("$scope.chosenRecipe in controller is: " + $scope.chosenRecipe)
				console.log("$scope.chosenRecipe.title is " + $scope.chosenRecipe.title)
			});
		}
		
}]);

recipeControllers.controller('listController',['$scope', '$location', '$document', 'listService', function($scope, $location, $document, listService){
		
		console.log("Entered list Controller, about to add ingredient")	
		$scope.ingredients = listService.getIngredients()

		$scope.addIngredient = function(){
			console.log("addIngredient method in listController now executing...")
			listService.addIngredient($scope.ingredient);
			$scope.ingredients = listService.getIngredients()

		}
		$scope.removeIngredient = function(ingredient){
			console.log("removeIngredient method in listController now executing...")
			listService.removeIngredient(ingredient);
			$scope.ingredients = listService.getIngredients()
		},

		// $scope.scrollTo = function() {
  //     		$location.hash("shopping-list");
  //     		$anchorScroll();
  //  		}

		$scope.scrollTo = function(id) {
    		$document.scrollToElement(id, 0, 2000);
  		}
}]);

