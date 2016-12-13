recipeApp.controller('americanController', ['$scope', '$http', function($scope, $http){ 

		console.log("Entered Controller, about to make american call")	
		$http.get("/american").then(function(res){
			console.log("successfully made get request")
			console.log("Results from request: " + res.data)

	    	$scope.recipes = res.data
		})
}]);
