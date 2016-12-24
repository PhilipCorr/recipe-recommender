recipeApp.factory('constantService', [function(){
  var constants=
  {
    "URLStart": "https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes"
  }; 

  return{ 
    getConstant: function(val){
    	console.log("now getting URLStart in constantService")
        return constants[val];
    }


  };
}]);
