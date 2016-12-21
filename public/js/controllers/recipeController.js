recipeApp.controller('recipeController', ['$scope', 'recipeService', function($scope, recipeService){
		console.log("Entered Filter Controller")	
		$scope.chosenRecipe = recipeService.getChosenRecipe();
		$scope.filters = recipeService.getFilters();
		$scope.recipes = recipeService.getRecipes();
		$scope.getBtnText = recipeService.getText();
		$scope.cuisines = recipeService.getCuisines();
		$scope.diets = recipeService.getDiets();

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
		$scope.getData = function() {
			console.log("getData method in recipeController now executing...")

			// call method in service
			recipeService.getData()
			.then(function(response){
				$scope.recipes = response;
				$scope.submittedSearch='true'
			});
		},
		$scope.getDetailedData = function(id){
			console.log("getDetailedData method in recipeController now executing...")
			recipeService.getDetailedData(id)
			.then(function(response){
				$scope.chosenRecipe[0] = response;
				console.log("$scope.chosenRecipe in controller is: " + $scope.chosenRecipe[0])
				console.log("$scope.chosenRecipe.title is " + $scope.chosenRecipe[0].title)
			});
		}

		
}]);
