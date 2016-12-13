recipeApp.controller('indexController', ['$scope', '$http', function($scope, $http){ 

		console.log("Entered Controller, about to make random call")	
		$http.get("/home").then(function(res){
			console.log("successfully made get request")
			console.log("Results from request: " + res.data)

	    	$scope.recipes = res.data
		})
}]);
