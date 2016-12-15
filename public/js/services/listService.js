recipeApp.factory('listService', ['$rootScope', function($rootScope){

	console.log("Entered list service factory")

		return{
			addIngredient: function(ingredient, ingredients){	
         		ingredients.push(ingredient);
			},
			removeIngredient: function(ingredient, ingredients){
				var index = ingredients.indexOf(ingredient);
  				ingredients.splice(index, 1); 
			}
		};
}]);




