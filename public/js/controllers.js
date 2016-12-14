var recipeControllers = angular.module('recipeControllers', []);

recipeControllers.controller('indexController', ['$scope', 'recipeService', function($scope, recipeService){
		console.log("Entered Controller, about to make most popular call")	
		$scope.diet = "paleo"
		console.log("$scope.diet is " + $scope.diet)
		$scope.getData = function() {
			recipeService.getData();
		}
		// $http.get("/home").then(function(res){
		// 	console.log("successfully made get request")
		// 	console.log("Results from request: " + res.data)
	 //    	$scope.recipes = res.data
		//})
		// var config = {
	 //    		params: {
	 //        		diet:vegetarian,
	 //        		cuisine:american,
	 //        		number:10,
	 //        		type:main+course
	 //    		}
		// 	}

			// 		$http({
		 //    url: user.details_path, 
		 //    method: "GET",
		 //    params: {user_id: user.id}
		 // });

        
}]);

recipeControllers.controller('americanController',['$scope', '$http', function($scope, $http){
		console.log("Entered Controller, about to make american call")	
		$http.get("/american").then(function(res){
			console.log("successfully made get request")
			console.log("Results from request: " + res.data)
	    	$scope.recipes = res.data
		})
}]);

recipeControllers.controller('italianController',['$scope', '$http', function($scope, $http){
		console.log("Entered Controller, about to make italian call")	
		$http.get("/italian").then(function(res){
			console.log("successfully made get request")
			console.log("Results from request: " + res.data)
	    	$scope.recipes = res.data
		})
}]);

recipeControllers.controller('indianController',['$scope', '$http', function($scope, $http){
		console.log("Entered Controller, about to make indian call")	
		$http.get("/indian").then(function(res){
			console.log("successfully made get request")
			console.log("Results from request: " + res.data)
	    	$scope.recipes = res.data
		})
}]);

recipeControllers.controller('irishController',['$scope', '$http', function($scope, $http){
		console.log("Entered Controller, about to make irish call")	
		$http.get("/irish").then(function(res){
			console.log("successfully made get request")
			console.log("Results from request: " + res.data)
	    	$scope.recipes = res.data
		})
}]);

recipeControllers.controller('chineseController',['$scope', '$http', function($scope, $http){
		console.log("Entered Controller, about to make chinese call")	
		$http.get("/chinese").then(function(res){
			console.log("successfully made get request")
			console.log("Results from request: " + res.data)
	    	$scope.recipes = res.data
		})
}]);

recipeControllers.controller('mexicanController',['$scope', '$http', function($scope, $http){
		console.log("Entered Controller, about to make mexican call")	
		$http.get("/mexican").then(function(res){
			console.log("successfully made get request")
			console.log("Results from request: " + res.data)
	    	$scope.recipes = res.data
		})
}]);
