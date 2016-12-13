recipeApp.factory('indexService', ['$rootScope', '$http', function($rootScope,$http){

	console.log("Entered service factory")

	return{
		getMessage: function(){
			$rootScope.message = "Welcome to angular Service"
		},

		getRecipeTitles: function(){	
			console.log("Just about to make get request...")
			$http.get("/american").then(function(response){
				console.log("successfully made get request")
				return response
			})
		}
	};
}]);

