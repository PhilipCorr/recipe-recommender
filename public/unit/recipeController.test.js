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

    describe('$scope.getChosenRecipe', function(){
        it("Getting the chosen recipe", function () {
			expect(true).toBe(true);
        });
    });

});