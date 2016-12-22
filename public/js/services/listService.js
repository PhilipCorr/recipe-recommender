recipeApp.factory('listService', ['$rootScope', function($rootScope){

	console.log("Entered list service factory")


		var ingredients = []
		//console.log("$rootScope.ingredients[0] is " + $rootScope.ingredients[0])

		return{
			getIngredients: function(){
				console.log("getIngredients in list service now executing...")
				return ingredients;
			},
			// setProperty: function(key, value){
			// 	ingredients = value
			// }
			addIngredient: function(ingredient){	
				console.log("addIngredient in list service now executing...")
         		ingredients.push(ingredient);
			},
			updateIngredient: function(ingredient, index){	
				console.log("updateIngredient in list service now executing...")
				//var index = ingredients.indexOf(ingredient);
				ingredients.splice(index, 1);
  				ingredients.splice(index, 0, ingredient); 
			},
			removeIngredient: function(ingredient){
				console.log("removeIngredient in list service now executing...")
				var index = ingredients.indexOf(ingredient);								
				console.log("ingredient index:" + index)
  				ingredients.splice(index, 1); 
			},
			addToShoppingList: function(chosenRecipe){
				console.log("Inside AddToShoppingList in service")
				console.log("chosenRecipe.extendedIngredients: " + chosenRecipe.extendedIngredients[0].name)
				angular.forEach(chosenRecipe.extendedIngredients, function(ingredient){
				console.log("ingredient.name: " + ingredient.name)
       				ingredients.push(ingredient.name);
  				});
			},
		};
}]);




