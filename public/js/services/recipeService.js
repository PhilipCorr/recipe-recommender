recipeApp.factory('recipeService', ['$rootScope', '$http', 'constantService', function($rootScope, $http, constantService){

		// initialise variables when singleton is instantiated
	    var chosenRecipe = []
	    var instructions = []
	    var URL = constantService.getConstant("URL");
	    var URLStart = constantService.getConstant("URLSTART");
	    var offset = 0
	    var filters =
	        {
	            "cuisine": [],
	            "diet": [],
	            "includeIngredients": "",
	        };
	    var recipes = [];
	    var getBtnText = "Search Recipes"
	    var cuisines = ["american","italian","indian","irish","chinese","mexican"];
		var diets = ["vegetarian","vegan","pescatarian","paleo","primal"];
		var submittedSearch = false;
		var endPoint = "random";
		var alertNeeded = false;
		
		return{
			//getters
			getChosenRecipe: function(){
				return chosenRecipe;
			},
			getAlertNeeded: function(){
				return alertNeeded;
			},
			getEndPoint: function(){
				return endPoint;
			},
			getSubmittedSearch: function(){
				return submittedSearch;
			},
			getInstructions: function(){
				return instructions;
			},
			getCuisines: function(){
				return cuisines;
			},
			getDiets: function(){
				return diets;
			},
			getText: function(){
				return getBtnText;
			},
			getRecipes: function(){
				return recipes;
			},
			getFilters: function(){
				return filters;
			},
			// setters
			setAlertNeeded: function(val){
				alertNeeded = val
			},
			setOffset: function(val){
				offset = val
			},
			// remove all filters of this type
			removeFilters: function(filterType){	
         		filterType.length = 0;
			},
			// add new filter to this filter type array
			appendFilter: function(filterType, filterVal){
				filterType.push(filterVal);
			},
			// remove specific filter from array
			removeFilter: function(filterType, filterVal){
				var index = filterType.indexOf(filterVal);
  				filterType.splice(index, 1);
			},
			// Make API call to spoonacular DB
			getData: function(id, methodName){

				// construct endpoint URL
				if(id==0){
					// will return multiple recipes
					URL = URLStart + "/" + methodName + "?" 
				}
				else{
					// will return single recipe
					URL = URLStart + "/" + id + "/" + methodName + "?" 
				}

				// parameters get added to url when get request is made 
	        	var parameters =
		        {
		            "cuisine": filters.cuisine.join(","),
		            "diet": filters.diet.join(","),
		            "number": "10",
		            "includeIngredients": filters.includeIngredients,
		            "offset": offset.toString()
		        };

		        return $http({
		        url: URL,
	            method: "GET",
	            params: parameters,
	            headers: {"X-Mashape-Key": "UhgpDYqy2pmsh8nnaEksOhY83DJ2p1PHdyfjsnjmKT2rQVIH6S"}

         		}).then(
         		function(res) {
         			submittedSearch='true'
         			switch(methodName){

         				// get multiple recipes
		         		case "searchComplex":
							recipes = res.data.results
							offset = offset + 10
							return recipes

						// get extended info about single recipe
						case "information":
							chosenRecipe = res.data;
							return chosenRecipe
						
						// get detailed instructions about single recipe
						case "analyzedInstructions":
							instructions = res.data;
							return instructions

						// get random ingredients if no filters chosen
						case "random":
							recipes = res.data.recipes
							return recipes
						default:
							console.log("Can't make unexpected endpoint method call, failed in switch")
					}
				},
				function(data){
					console.log("error occured making getData request in recipeController:" + data)
				});
				}
			};
}]);




