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

		var filters =
	        {
	            "cuisine": "indian",
	            "diet": "paleo",
	            "number": "10"
	        };

		return{
			getFilters: function(){
				console.log("getFilters in list service now executing...")
				return filters;
			},
			addFilter: function(newFilters){	
				console.log("addFilter in list service now executing...")
         		filters = newFilters;
			},
			getData: function(){	
				console.log("diet variable in service is " + filters.diet)
				console.log("cuisine variable in service is " + filters.cuisine)
				console.log("Just about to make get request...")
		        $http({

		        // params get added to url when get request is made
				url:'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/searchComplex?type=main+course',
	            method: "GET",
	            params:{
	            	diet: filters.diet,
	            	cuisine: filters.cuisine,
	            	number: filters.number
	            },
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
					$rootScope.recipes = res.data.results
				},
				function(data){
					console.log("error occured making get request in recipeController:" + data)
				});
				}
			};
}]);




