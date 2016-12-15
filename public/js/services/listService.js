recipeApp.factory('listService', ['$rootScope', function($rootScope){

	console.log("Entered list service factory")

		return{
			addIngredient: function(ingredient, ingredients){	
         		ingredients.push(ingredient);
			}
		};
}]);




