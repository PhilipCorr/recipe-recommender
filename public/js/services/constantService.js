recipeApp.factory('constantService', [function(){
	var constants=
	{
  	// Recipe Service
  	"BTN_TEXT":"Search Recipes",
  	"CUISINES": ["american","italian","indian","irish","chinese","mexican"],
  	"DIETS": ["vegetarian","vegan","pescatarian","paleo","primal"],
  	"FILTERS":{
  		"cuisine": [],
  		"diet": [],
  		"includeIngredients": "",
  	},
  	"CHOSEN_RECIPE":[],
  	"INSTRUCTIONS":[],
  	"RECIPES":[],
  	"ALERT_NEEDED":false,
  	"SUBMITTED_SEARCH":false,
  	"OFFSET":0,
  	"NUMBER_OF_RECIPES":10,

    // List Service
    "INGREDIENTS": [],
    "ADDED_TO_SHOPPING_LIST": false,

    // API
    "HTTP_METHOD":"GET",
    "HEADER":{"X-Mashape-Key": "UhgpDYqy2pmsh8nnaEksOhY83DJ2p1PHdyfjsnjmKT2rQVIH6S"},
    "URL_START":"https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/",
    "URL":"",
    "SEARCH_COMPLEX_EP": "searchComplex",
    "INSTRUCTIONS_EP": "analyzedInstructions",
    "INFORMATION_EP":"information",
    "RANDOM_EP":"random"
}; 

return{ 
	getConstant: function(val){
		return constants[val];
	}
};
}]);
