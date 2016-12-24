recipeApp.controller('recipeController', ['$scope', 'recipeService', 'listService', 'constantService', function($scope, recipeService, listService, constantService){
	
	// initialise values on controller load
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

	// watch filters variable in order to change endpoint on filter selection
	$scope.$watch('filters', function (newValue, oldValue, $scope) {
		recipeService.setOffset(0);
		if($scope.filters.includeIngredients=="" && $scope.filters.cuisine.length == 0  && $scope.filters.diet.length == 0){
			$scope.endPoint = constantService.getConstant("RANDOM_EP");
		}
		else{
			$scope.endPoint = constantService.getConstant("SEARCH_COMPLEX_EP");
		}
	}, true);
	// remove all filters of this type and update style of button
	$scope.removeFilters = function(filterType){
		angular.forEach(filterType, function(filterVal){
			var myEl = angular.element( document.querySelector( '#' + filterVal ) );
			myEl.removeClass('filter-added');
			myEl.addClass('btn-filter');   			
		});
		recipeService.removeFilters(filterType);
		$scope.filters = recipeService.getFilters()
	},
	// add recipe ingredients to shopping list
	$scope.addToShoppingList = function(chosenRecipe){
		if(chosenRecipe.extendedIngredients){
			listService.addToShoppingList(chosenRecipe)
			$scope.addedToShoppingList = listService.getAddedToShoppingList();
		}
	},
	// update filter style and add/remove the filter
	$scope.changeSelection = function (filterType, filterVal) {
		if(filterType.indexOf(filterVal) == -1){
			recipeService.appendFilter(filterType, filterVal);
			var myEl = angular.element( document.querySelector( '#' + filterVal ) );
			myEl.removeClass('btn-filter');   			
			myEl.addClass('filter-added');   			
		}
		else{
			recipeService.removeFilter(filterType, filterVal);
			var myEl = angular.element( document.querySelector( '#' + filterVal ) );
			myEl.removeClass('filter-added');   			
			myEl.addClass('btn-filter');   			
		}
		$scope.filters = recipeService.getFilters();
	},
	// Make API call to spoonacular DB
	$scope.getData = function(methodName, id) {

		recipeService.getData(methodName, id)
		.then(function(response){
			$scope.submittedSearch = recipeService.getSubmittedSearch();
			switch(methodName){

			// get multiple recipes
			case constantService.getConstant("SEARCH_COMPLEX_EP"):
			$scope.recipes = response;
			break;

			// get extended info about single recipe
			case constantService.getConstant("INFORMATION_EP"):
			$scope.chosenRecipe[0] = response;
			recipeService.setAlertNeeded(true);
			$scope.alertNeeded = true;
			break;

			// get detailed instructions about single recipe
			case constantService.getConstant("INSTRUCTIONS_EP"):
			$scope.instructions[0] = response;
			break
			
			// get random ingredients if no filters chosen
			case constantService.getConstant("RANDOM_EP"):
			$scope.recipes = response;
			break

			default:
			console.log("Can't make unexpected endpoint method call, failed in controller switch")
		};
	});
	}
}]);
