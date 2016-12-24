recipeApp.controller('listController',['$scope', 'listService', function($scope, listService){
		
		// set variables on controller load
		$scope.ingredients = listService.getIngredients()

		// add ingredient to list if not already present
		$scope.addIngredient = function(ingredient){
			if(ingredient){
				listService.addIngredient(ingredient);
				$scope.ingredients = listService.getIngredients()			
			}
		}
		// replace ingredient in list with another ingredient
		$scope.updateIngredient = function(ingredient, index){
			listService.updateIngredient(ingredient, index);
			$scope.ingredients = listService.getIngredients()

		}
		// find ingredient in list and remove it
		$scope.removeIngredient = function(ingredient){
			listService.removeIngredient(ingredient);
			$scope.ingredients = listService.getIngredients()
		}
}]);
