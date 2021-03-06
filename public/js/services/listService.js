recipeApp.factory('listService', ['$rootScope','constantService', function($rootScope, constantService){

	// initialise variables when singleton is instantiated
	var ingredients = constantService.getConstant("INGREDIENTS");
	var addedToShoppingList = constantService.getConstant("ADDED_TO_SHOPPING_LIST");

	return{
		//getters
		getIngredients: function(){
			return ingredients;
		},
		getAddedToShoppingList: function(){
			return addedToShoppingList;
		},
		// add ingredient to list if not already present
		addIngredient: function(ingredient){	
			if(ingredients.indexOf(ingredient) == -1){
				ingredients.push(ingredient);
			}
		},
		// replace ingredient in list with another ingredient
		updateIngredient: function(ingredient, index){	
			ingredients.splice(index, 1);
			ingredients.splice(index, 0, ingredient); 
		},
		// find ingredient in list and remove it
		removeIngredient: function(ingredient){
			var index = ingredients.indexOf(ingredient);								
			ingredients.splice(index, 1); 
		},
		// add all required ingredients to list if not on list already
		addToShoppingList: function(chosenRecipe){
			angular.forEach(chosenRecipe.extendedIngredients, function(ingredient){
				if(ingredients.indexOf(ingredient.name) == -1){
					ingredients.push(ingredient.name);
				}
			});
			addedToShoppingList = true
		}
	};
}]);




