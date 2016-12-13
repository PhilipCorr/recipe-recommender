recipeApp.controller('indexController', ['$scope', '$http', function($scope, $http){ 
		var titles = [];

		//promise = indexService.getRecipeTitles()
		console.log("Entered Controller, about to call american")	
		$http.get("/american").then(function(res){
			console.log("successfully made get request")
			console.log("Results from request: " + res.data)

	    	$scope.recipes = res.data
		})
}]);
