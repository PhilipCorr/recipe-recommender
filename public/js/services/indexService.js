recipeApp.factory('indexService', ['$rootScope', function($rootScope){
	
	return{
		getMessage: function(){
			$rootScope.message = "Welcome to Service"
		}
	};
}]);

