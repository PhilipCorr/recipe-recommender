recipeApp.factory('recipeService', ['$rootScope', '$http', function($rootScope, $http){

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
	    var URL = "https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/"
	    var offset = 10
	    var filters =
	        {
	            "cuisine": [],
	            "diet": [],
	            "number": 10,
	            "includeIngredients": "",
	            "offset": offset.toString() 
	        };
	    var recipes = [];
	    var getBtnText = "Search Recipes"
	    var cuisines = ["american","italian","indian","irish","chinese","mexican"];
		var diets = ["vegetarian","vegan","pescatarian","paleo","primal"];


		return{
			//getters
			getChosenRecipe: function(){
				console.log("getChosenRecipe in recipe service now executing...")
				return chosenRecipe;
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
			getDetailedData: function(id){	
				console.log("id value is " + id)
				console.log("Just about to make get request...")
		        return $http({
				url: URL + id +'/information',
	            method: "GET",
	            //params: filters,
	            headers: {"X-Mashape-Key": "UhgpDYqy2pmsh8nnaEksOhY83DJ2p1PHdyfjsnjmKT2rQVIH6S"}

         		}).then(
         		function(res) {
         			console.log("The url request made was: " + res.config.url)
         			console.log("Response.status is: " + res.status)
					chosenRecipe =  res.data
					console.log("chosenRecipe in recipeService: " + chosenRecipe)
					return chosenRecipe

				},
				function(data){
					console.log("error occured making getDetailedData request in recipeController:" + data)
				});
				},
			getData: function(){
				console.log("Filters:")
				console.log("filters.diet:" + filters.diet)
				console.log("filters.cuisine:" + filters.cuisine)
				console.log("filters.number:" + filters.number)
				console.log("filters.includeIngredients:" + filters.includeIngredients)
				console.log("filters.offset:" + filters.offset)

				console.log("Just about to convert to parameters...")

	        	var temp = filters;
	        	var cuisineString = temp.cuisine.join(",");
	        	var dietString = temp.diet.join(",");
	        	console.log("cuisineString: " + cuisineString)
	        	console.log("dietString: " + dietString)

	        	var parameters =
		        {
		            "cuisine": cuisineString,
		            "diet": dietString,
		            "number": "10",
		            "includeIngredients": temp.includeIngredients,
		            "offset": offset.toString()
		        };

	        	console.log("Parameters:")
				console.log("parameters.diet:" + parameters.diet)
				console.log("parameters.cuisine:" + parameters.cuisine)
				console.log("parameters.number:" + parameters.number)
				console.log("parameters.includeIngredients:" + parameters.includeIngredients)
				console.log("Just about to make get request...")
				console.log("parameters.offset:" + parameters.offset)


		        return $http({

		        // params get added to url when get request is made
				url: URL + 'searchComplex?type=main+course',
	            method: "GET",
	            params: parameters,
	            headers: {"X-Mashape-Key": "UhgpDYqy2pmsh8nnaEksOhY83DJ2p1PHdyfjsnjmKT2rQVIH6S"}

         		}).then(
         		function(res) {
         			console.log("The url request made was: " + res.config.url)
         			console.log("Response.status is: " + res.status)

					recipes =  res.data.results
					console.log("Recipes array is: " + recipes)
					offset = offset + 10
					console.log("Offest is: " + offset)
					filters.offset = offset.toString();
					return recipes
				},
				function(data){
					console.log("error occured making getData request in recipeController:" + data)
				});
				}
			};
}]);




