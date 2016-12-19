describe('tests for listController', function () {
    
    var scope;
    var ctrl;
    var listService;

    beforeEach(module('recipeApp'));

    beforeEach(inject(function($rootScope, $controller, _listService_){

        // create a new child of rootScope to mock variables
        scope = $rootScope.$new();

        listService = _listService_
        ctrl = $controller('listController',{
            $scope: scope,
        });
    }));

    describe('$scope.addIngredient', function(){
        it("Adds an ingredient to the shopping list", function () {
            scope.addIngredient("egg");
            scope.addIngredient("cheese");

            console.log("scope.ingredients: " + scope.ingredients)
            expect(scope.ingredients).toContain("cheese");
        });
    }); 
});