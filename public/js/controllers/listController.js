recipeApp.controller('listController',['$scope', '$location', '$document', 'listService', function($scope, $location, $document, listService){
		
		console.log("Entered list Controller, about to add ingredient")	
		$scope.ingredients = listService.getIngredients()
		//$scope.$broadcast('listLoaded');
		$scope.showList='true'
		console.log("showList: " + $scope.showList)	


		$scope.addIngredient = function(ingredient){
			console.log("addIngredient method in listController now executing...")
			listService.addIngredient(ingredient);
			$scope.ingredients = listService.getIngredients()

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
		},

		// $scope.scrollTo = function() {
  //     		$location.hash("shopping-list");
  //     		$anchorScroll();
  //  		}

		$scope.scrollTo = function(id) {
    		$document.scrollToElement(id, 0, 2000);
  		}
}]);
