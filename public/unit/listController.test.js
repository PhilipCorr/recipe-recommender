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
            expect(scope.ingredients).toContain("cheese", "egg");
        });
    });

	describe('$scope.addIngredient', function(){
        it("Adds an empty string to shopping list", function () {
            scope.addIngredient("");

            console.log("scope.ingredients: " + scope.ingredients)
            expect(scope.ingredients).toBeEmptyArray;
        });
    });

	describe('$scope.removeIngredient', function(){
        it("Removes an ingredient from shopping list", function () {
            scope.addIngredient("egg");
			expect(scope.ingredients).toContain("egg");

			scope.removeIngredient("egg");
			expect(scope.ingredients).not.toContain("egg");

            console.log("scope.ingredients: " + scope.ingredients)
            expect(scope.ingredients).toBeEmptyArray;
        });
    });

    describe('$scope.updateIngredient', function(){
        it("Removes an ingredient from shopping list", function () {
            scope.addIngredient("egg");
            scope.addIngredient("cheese");
            scope.addIngredient("bread");
            expect(scope.ingredients[1]).toEqual("cheese");

            scope.updateIngredient("pasta", 1)
            expect(scope.ingredients[0]).toEqual("egg");
            expect(scope.ingredients[1]).toEqual("pasta");
            expect(scope.ingredients[2]).toEqual("bread");
        });
    });
});