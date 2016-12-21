describe('tests for recipeController', function () {

    var scope;
    var ctrl;
    var recipeService;

    beforeEach(module('recipeApp'));

    beforeEach(inject(function($rootScope, $controller, _recipeService_){

        // create a new child of rootScope to mock variables
        scope = $rootScope.$new();

        recipeService = _recipeService_
        ctrl = $controller('recipeController',{
            $scope: scope,
        });
    }));


   //   describe('$scope.addFilter', function(){
   //      it("Adding filters", function () {
   //          var newFilter =
   //          {
   //              "cuisine": ["irish"],
   //              "diet": ["vegan"],
   //              "number": 10,
   //              "includeIngredients": "potato"
   //          };
   //          //scope.filters = newFilters;
   //          scope.addFilter(newFilter);
   //          //scope.filters.cuisine = "mexican";
			// expect(scope.filters.diet).toContain("irish");
   //      });
   //  });

     describe('$scope.removeFilters', function(){
        it("Removing cuisine filters", function () {
            var newFilters =
            {
                "cuisine": ["irish", "mexican"],
                "diet": ["vegan"],
                "number": 10,
                "includeIngredients": "potato"
            };
            scope.filters = newFilters;
            expect(scope.filters.cuisine).toContain("irish");
            expect(scope.filters.cuisine).toContain("mexican");
            console.log("scope.filters.cuisine: " + scope.filters.cuisine);

            scope.removeFilters(scope.filters.cuisine);
            console.log("scope.filters.cuisine: " + scope.filters.cuisine);
            expect(scope.filters.cuisine).toBeEmptyArray;
        });
    });

     describe('$scope.removeFilters', function(){
        it("Removing diet filters", function () {
            var newFilters =
            {
                "cuisine": ["irish"],
                "diet": ["vegan", "paleo"],
                "number": 10,
                "includeIngredients": "potato"
            };
            scope.filters = newFilters;
            expect(scope.filters.diet).toContain("vegan");
            expect(scope.filters.diet).toContain("paleo");
            console.log("scope.filters.diet: " + scope.filters.diet);

            scope.removeFilters(scope.filters.diet);
            console.log("scope.filters.diet: " + scope.filters.diet);
            expect(scope.filters.diet).toBeEmptyArray;
        });
    });

});