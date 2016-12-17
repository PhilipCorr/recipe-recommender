recipeApp.factory('recipeService', ['$rootScope', '$http', function($rootScope,$http){

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
	    var filters =
	        {
	            "cuisine": [],
	            "diet": [],
	            "number": "10",
	            "includeIngredients": ""
	        };
	    var recipes = [];

		return{
			getChosenRecipe: function(){
				console.log("getChosenRecipe in recipe service now executing...")
				return chosenRecipe;
			},
			// setChosenRecipe: function(index){	
			// 	console.log("setChosenRecipe in recipe service now executing...")
   //       		chosenRecipe = $rootScope.recipes[index];
			// },
			getRecipes: function(){
				console.log("getRecipes in recipe service now executing...")
				return recipes;
			},
			getFilters: function(){
				console.log("getFilters in recipe service now executing...")
				return filters;
			},
			addFilter: function(newFilters){	
				console.log("addFilter in recipe service now executing...")
         		filters = newFilters;
			},
			appendToFilters: function(filterType, newFilter){
				console.log("In appendToArray")
				filters.cuisine.push(newFilter);
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
					console.log("Response.data is: " + res.data)

					//Just testing that object returned is as expected
					// angular.forEach(res.data.results, function(recipe){
     //               		console.log("Current recipe.title in loop is:" + recipe.title);  
     //           		})

               		//Assign Json to object in the view
					chosenRecipe =  res.data
					console.log("chosenRecipe in recipeService: " + chosenRecipe)
					return chosenRecipe

				},
				function(data){
					console.log("error occured making getDetailedData request in recipeController:" + data)
				});
				},
			getData: function(){	
				console.log("diet variable in service is " + filters.diet)
				console.log("cuisine variable in service is " + filters.cuisine)
				console.log("Just about to make get request...")
		        return $http({

		        // params get added to url when get request is made
				url: URL + 'searchComplex?type=main+course',
	            method: "GET",
	            params: filters,
	            headers: {"X-Mashape-Key": "UhgpDYqy2pmsh8nnaEksOhY83DJ2p1PHdyfjsnjmKT2rQVIH6S"}

         		}).then(
         		function(res) {
         			console.log("The url request made was: " + res.config.url)
         			console.log("Response.status is: " + res.status)
					console.log("Response.data.recipes is: " + res.data.results)

					//Just testing that object returned is as expected
					// angular.forEach(res.data.results, function(recipe){
     //               		console.log("Current recipe.title in loop is:" + recipe.title);  
     //           		})

               		//Assign Json to object in the view
					recipes =  res.data.results
					console.log("Recipes array is: " + recipes)
					return recipes
				},
				function(data){
					console.log("error occured making getData request in recipeController:" + data)
				});
				}
			};
}]);




