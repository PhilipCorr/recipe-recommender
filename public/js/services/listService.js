recipeApp.factory('listService', ['$rootScope', function($rootScope){

	console.log("Entered list service factory")


		var ingredients = []
		var addedToShoppingList = false

		return{
			getIngredients: function(){
				console.log("getIngredients in list service now executing...")
				return ingredients;
			},
			getAddedToShoppingList: function(){
				console.log("getAddedToShoppingList in list service now executing...")
				return addedToShoppingList;
			},
			addIngredient: function(ingredient){	
				console.log("addIngredient in list service now executing...")
				if(ingredients.indexOf(ingredient) == -1){
					console.log("ingredient.name: " + ingredient.name)
       				ingredients.push(ingredient);
       			}
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
					if(ingredients.indexOf(ingredient.name) == -1){
						console.log("ingredient.name: " + ingredient.name)
       					ingredients.push(ingredient.name);
       				}
  				});
  				addedToShoppingList = true
			}
		};
}]);




