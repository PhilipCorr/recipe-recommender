recipeApp.factory('recipeService', ['$rootScope', '$http', 'constantService', function($rootScope, $http, constantService){

	// initialise variables when singleton is instantiated
	var chosenRecipe = constantService.getConstant("CHOSEN_RECIPE");
	var instructions = constantService.getConstant("INSTRUCTIONS");
	var recipes = constantService.getConstant("RECIPES");
	var URL = constantService.getConstant("URL");
	var URLStart = constantService.getConstant("URL_START");
	var offset = constantService.getConstant("OFFSET");
	var filters = constantService.getConstant("FILTERS");
	var getBtnText = constantService.getConstant("BTN_TEXT");
	var cuisines = constantService.getConstant("CUISINES");
	var diets = constantService.getConstant("DIETS");
	var submittedSearch = constantService.getConstant("SUBMITTED_SEARCH");
	var endPoint = constantService.getConstant("RANDOM_EP");
	var alertNeeded = constantService.getConstant("ALERT_NEEDED");
	
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
		getData: function(methodName, id){

			// construct endpoint URL
			if(id==null){
				// will return multiple recipes
				URL = URLStart + methodName
			}
			else{
				// will return single recipe matching id value
				URL = URLStart + id + "/" + methodName 
			}

			// parameters get added to url when get request is made 
			var parameters =
			{
				"cuisine": filters.cuisine.join(","),
				"diet": filters.diet.join(","),
				"number": constantService.getConstant("NUMBER_OF_RECIPES"),
				"includeIngredients": filters.includeIngredients,
				"offset": offset.toString()
			};

			return $http({
				url: URL,
				method: constantService.getConstant("HTTP_METHOD"),
				params: parameters,
				headers: constantService.getConstant("HEADER")

			}).then(
			function(res) {
				submittedSearch='true'
				switch(methodName){

     				// get multiple recipes
     				case constantService.getConstant("SEARCH_COMPLEX_EP"):
     				recipes = res.data.results
     				offset = offset + 10
     				return recipes

					// get extended info about single recipe
					case constantService.getConstant("INFORMATION_EP"):
					chosenRecipe = res.data;
					return chosenRecipe
					
					// get detailed instructions about single recipe
					case constantService.getConstant("INSTRUCTIONS_EP"):
					instructions = res.data;
					return instructions

					// get random ingredients if no filters chosen
					case constantService.getConstant("RANDOM_EP"):
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




