recipeApp.factory('constantService', [function(){
  var constants=
  {
    "URLSTART":"https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes",
    "URL":"",
  }; 

  return{ 
    getConstant: function(val){
    	console.log("now getting URLStart in constantService")
        return constants[val];
    }
  };
}]);
