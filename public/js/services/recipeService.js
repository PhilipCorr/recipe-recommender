recipeApp.factory('recipeService', ['$rootScope', '$http', function($rootScope,$http){

	console.log("Entered service factory")

		return{
			getData: function(){	
				console.log("Just about to make get request...")
		        $http({
				url:'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/searchComplex?type=main+course',
	            method: "GET",
	            params:{
	            	diet: $rootScope.diet,
	            	cuisine: "american",
	            	number: "10"
	            },
	            headers: {"X-Mashape-Key": "UhgpDYqy2pmsh8nnaEksOhY83DJ2p1PHdyfjsnjmKT2rQVIH6S"}

         		}).then(
         		function(res) {
         			console.log("The url request made was: " + res.config.url)

         			console.log("Response.status is: " + res.status)
					console.log("Response.data.recipes is: " + res.data.results)
					angular.forEach(res.data.results, function(recipe){
                   		console.log("Current recipe.title in loop is:" + recipe.title);  
               		})
					$rootScope.recipes = res.data.results
				},
				function(data){
					console.log("error occured making get request in indexController:" + data)
				});
				}
			};
}]);




