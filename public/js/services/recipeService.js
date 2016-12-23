recipeApp.factory('recipeService', ['$rootScope', '$http', 'constantService', function($rootScope, $http, constantService){

	// factory creates a service. 
	// This service can be called from whatever 
	// controller we want in order to make a get request.
	// $rootScope is how services refer to the scope that the view and controller have access to.
	// $http is required to make get request.
	// I moved the get request here instead of index.js, i.e. the nodejs file, as
	// the scope variables are available here. The other option would have been to send
	// the scope variables to nodejs in a post request but that would mean making a post
	// request in order to make a get request which would be messier and wouldn't make much sense.
	console.log("Entered recipe service factory")

	    var chosenRecipe = [];
	    var instructions = [];
	    var URL = ""
	    var URLStart = constantService.getConstant();
	    var offset = 10
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
			// setEndPoint: function(endPointVal){
			// 	console.log("setEndPoint in recipe service now executing...")
			// 	endPoint = endPointVal;
			// }
			//getters
			getChosenRecipe: function(){
				console.log("getChosenRecipe in recipe service now executing...")
				return chosenRecipe;
			},
			setAlertNeeded: function(val){
				console.log("setAlertNeeded in recipe service now executing...")
				alertNeeded = val
				console.log("alertNeeded: " + alertNeeded)
			},
			getAlertNeeded: function(){
				console.log("getAlertNeeded in recipe service now executing...")
				return alertNeeded;
			},
			getEndPoint: function(){
				console.log("getEndPoint in recipe service now executing...")
				return endPoint;
			},
			getSubmittedSearch: function(){
				console.log("getSubmittedSearch in recipe service now executing...")
				return submittedSearch;
			},
			getInstructions: function(){
				console.log("getChosenRecipe in recipe service now executing...")
				return instructions;
			},
			getCuisines: function(){
				return cuisines;
			},
			getDiets: function(){
				return diets;
			},
			getText: function(){
				console.log("getText in recipe service now executing...")
				return getBtnText;
			},
			getRecipes: function(){
				console.log("getRecipes in recipe service now executing...")
				return recipes;
			},
			getFilters: function(){
				console.log("getFilters in recipe service now executing...")
				return filters;
			},
			removeFilters: function(filterType){	
				console.log("removeFilters in recipe service now executing...")
         		filterType.length = 0;
			},
			appendFilter: function(filterType, filterVal){
				console.log("In appendFilter")
				console.log("filterType is: " + filterType)
				filterType.push(filterVal);
			},
			removeFilter: function(filterType, filterVal){
				console.log("In removeFilter")
				var index = filterType.indexOf(filterVal);
  				filterType.splice(index, 1);
			},
			getData: function(id, methodName){
				console.log("id value is " + id)
				console.log("Just about to make get request...")

				if(id==0){
					URL = URLStart + "/" + methodName + "?" 
				}
				else{
					URL = URLStart + "/" + id + "/" + methodName + "?" 
				}

				// console.log("Filters:")
				// console.log("filters.diet:" + filters.diet)
				// console.log("filters.cuisine.join(','): " + filters.cuisine.join(','))
				// console.log("filters.diet.join(','): " + filters.diet.join(','))
				// console.log("filters.cuisine:" + filters.cuisine)
				// console.log("filters.number:" + filters.number)
				// console.log("filters.includeIngredients:" + filters.includeIngredients)
				// console.log("filters.offset:" + filters.offset)

	        	var parameters =
		        {
		            "cuisine": filters.cuisine.join(","),
		            "diet": filters.diet.join(","),
		            "number": "10",
		            "includeIngredients": filters.includeIngredients,
		            "offset": offset.toString()
		        };

		        return $http({

		        // params get added to url when get request is made
		        url: URL,
	            method: "GET",
	            params: parameters,
	            headers: {"X-Mashape-Key": "UhgpDYqy2pmsh8nnaEksOhY83DJ2p1PHdyfjsnjmKT2rQVIH6S"}

         		}).then(
         		function(res) {
         			submittedSearch='true'

	         		if(methodName == "searchComplex"){
						console.log("The url request made was: " + res.config.url)
	         			console.log("Response.status is: " + res.status)

						recipes = res.data.results
						console.log("Recipes array is: " + recipes)
						offset = offset + 10
						console.log("Offest is: " + offset)
						filters.offset = offset.toString();
						return recipes
					}
					else if(methodName == "information"){
						console.log("The url request made was: " + res.config.url)
	         			console.log("Response.status is: " + res.status)
						chosenRecipe = res.data;
						console.log("chosenRecipe in recipeService: " + chosenRecipe)
						return chosenRecipe
					}
					else if(methodName == "analyzedInstructions"){
						console.log("The url request made was: " + res.config.url)
	         			console.log("Response.status is: " + res.status)
						instructions = res.data;
						console.log("instructions in controller is: " + instructions)
						return instructions
					}
					else if(methodName == "random"){
						console.log("The url request made was: " + res.config.url)
	         			console.log("Response.status is: " + res.status)
						recipes = res.data.recipes
						console.log("Recipes array is: " + recipes)
						offset = offset + 10
						console.log("Offest is: " + offset)
						filters.offset = offset.toString();
						return recipes
					}
				},
				function(data){
					console.log("error occured making getData request in recipeController:" + data)
				});
				}
			};
}]);




