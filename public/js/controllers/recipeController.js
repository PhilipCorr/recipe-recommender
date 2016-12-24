recipeApp.controller('recipeController', ['$scope', 'recipeService', 'listService', function($scope, recipeService, listService){
		console.log("Entered Filter Controller")
	
		$scope.chosenRecipe = recipeService.getChosenRecipe();
		$scope.instructions = recipeService.getInstructions();
		$scope.filters = recipeService.getFilters();
		$scope.recipes = recipeService.getRecipes();
		$scope.getBtnText = recipeService.getText();
		$scope.cuisines = recipeService.getCuisines();
		$scope.diets = recipeService.getDiets();
		$scope.submittedSearch = recipeService.getSubmittedSearch();
		$scope.addedToShoppingList = listService.getAddedToShoppingList();
		$scope.endPoint = recipeService.getEndPoint();
		$scope.alertNeeded = recipeService.getAlertNeeded();

		$scope.$watch('filters', function (newValue, oldValue, $scope) {
			recipeService.setOffset(0);
     		if($scope.filters.includeIngredients=="" && $scope.filters.cuisine.length == 0  && $scope.filters.diet.length == 0){
     			$scope.endPoint = "random" ;
			}
			else{
				$scope.endPoint = "searchComplex"
			}
		}, true);

		$scope.removeFilters = function(filterType){
			angular.forEach(filterType, function(filterVal){
      			var myEl = angular.element( document.querySelector( '#' + filterVal ) );
				console.log(myEl)
				myEl.removeClass('filter-added');
				myEl.addClass('btn-filter');   			
   			});
			recipeService.removeFilters(filterType);
			$scope.filters = recipeService.getFilters()
		},
		$scope.addToShoppingList = function(chosenRecipe){
			if(chosenRecipe.extendedIngredients){
				console.log("Inside AddToShoppingList")
				listService.addToShoppingList(chosenRecipe)
				$scope.addedToShoppingList = listService.getAddedToShoppingList();
			}
		},
		$scope.changeSelection = function (filterType, filterVal) {
        	if(filterType.indexOf(filterVal) == -1){
        		console.log("detected that filter is not in array")
        		recipeService.appendFilter(filterType, filterVal);
				var myEl = angular.element( document.querySelector( '#' + filterVal ) );
				console.log(myEl)
				myEl.removeClass('btn-filter');   			
				myEl.addClass('filter-added');   			
        	}
        	else{
        	console.log("detected that filter is in array")
				recipeService.removeFilter(filterType, filterVal);
				var myEl = angular.element( document.querySelector( '#' + filterVal ) );
				console.log(myEl)
				myEl.removeClass('filter-added');   			
				myEl.addClass('btn-filter');   			
        	}
        	$scope.filters = recipeService.getFilters();
    	},
		$scope.getData = function(id, methodName) {
			console.log("getData method in recipeController now executing...")

			// call method in service
			recipeService.getData(id, methodName)
			.then(function(response){
				$scope.submittedSearch = recipeService.getSubmittedSearch();
				if(methodName == "searchComplex"){
					$scope.recipes = response;
				}
				else if(methodName == "information"){
					$scope.chosenRecipe[0] = response;
					console.log("$scope.chosenRecipe in controller is: " + $scope.chosenRecipe[0])
					console.log("$scope.chosenRecipe.title is " + $scope.chosenRecipe[0].title)
					console.log("$scope.instructions in controller is: " + $scope.chosenRecipe[0].instructions)
					recipeService.setAlertNeeded(true);
					$scope.alertNeeded = true;
				}
				else if(methodName == "analyzedInstructions"){
					$scope.instructions[0] = response;
					console.log("$scope.instructions in controller is: " + $scope.instructions)
				}
				else if(methodName == "random"){
					$scope.recipes = response;
				}
			});
		}
}]);
