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
			removeIngredient: function(ingredient, ingredients){
				console.log("removeIngredient in list service now executing...")
				var index = ingredients.indexOf(ingredient);
  				ingredients.splice(index, 1); 
			}
		};
}]);



