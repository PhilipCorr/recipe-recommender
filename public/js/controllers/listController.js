recipeApp.controller('listController',['$scope', 'listService', function($scope, listService){
		
		$scope.ingredients = listService.getIngredients()

		$scope.addIngredient = function(ingredient){
			console.log("addIngredient method in listController now executing...")
			if(ingredient){
				listService.addIngredient(ingredient);
				$scope.ingredients = listService.getIngredients()			}
		}
		$scope.updateIngredient = function(ingredient, index){
			console.log("updateIngredient method in listController now executing...")
			listService.updateIngredient(ingredient, index);
			$scope.ingredients = listService.getIngredients()

		}
		$scope.removeIngredient = function(ingredient){
			console.log("removeIngredient method in listController now executing...")
			listService.removeIngredient(ingredient);
			$scope.ingredients = listService.getIngredients()
		}
}]);
