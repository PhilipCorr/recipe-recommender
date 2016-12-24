describe('tests for recipeController', function () {

    var scope;
    var ctrl;
    var recipeService;
    var listService;
    var constantService;

    beforeEach(module('recipeApp'));

    beforeEach(inject(function($rootScope, $controller, _recipeService_, _listService_, _constantService_){

        // create a new child of rootScope to mock variables
        scope = $rootScope.$new();

        recipeService = _recipeService_
        constantService = _constantService_
        listService = _listService_

        ctrl = $controller('recipeController',{
            $scope: scope,
        });

        ctrl = $controller('listController',{
            $scope: scope,
        });
    }));

    beforeEach(function() {
        // spy on getData method to test api endpoints
        spyOn(scope, 'getData');
    }); 

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
            scope.removeFilters(scope.filters.cuisine);
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
            scope.removeFilters(scope.filters.diet);
            expect(scope.filters.diet).toBeEmptyArray;
        });
    });

    describe('$scope.addToShoppingList', function(){
        it("Adding recipe ingredients to shopping list", function () {

            //mock recipe to match database response
            scope.chosenRecipe = {
                "vegetarian": false,
                "extendedIngredients":[
                {
                    "id": 1022009,
                    "name": "ancho chile powder"
                }
                ],
                "instructions": "Sample Instructions"
            };

            scope.addToShoppingList(scope.chosenRecipe);
            expect(scope.ingredients).toContain("ancho chile powder");
        });
    });

    describe('$scope.changeSelection', function(){
        it("Changing filter selection", function () {

                //Adding mexican to cusines filter
                scope.changeSelection(scope.filters.cuisine, "mexican");
                expect(scope.filters.cuisine).toContain("mexican");

                scope.changeSelection(scope.filters.cuisine, "mexican");
                expect(scope.filters.cuisine).not.toContain("mexican");
            });
    });

    describe('$scope.getData', function(){
        it("makes an api call to information endpoint to get a recipes information", function () {
            scope.getData(759070, "information");
            expect(scope.getData).toHaveBeenCalled();
        });
    });

    describe('$scope.getData', function(){
        it("makes an api call to analysedInstructions endpoint to get a recipes information", function () {
            expect(scope.chosenRecipe[0]).toBeUndefined(); 
            scope.getData(759070, "analysedInstructions");
            expect(scope.getData).toHaveBeenCalled();
        });
    });

    describe('$scope.getData', function(){
        it("makes an api call to random endpoint to get a recipes information", function () {
            expect(scope.chosenRecipe[0]).toBeUndefined(); 
            scope.getData(0, "random");
            expect(scope.getData).toHaveBeenCalled();
        });
    });

    describe('$scope.getData', function(){
        it("makes an api call to searchComplex endpoint to get a recipes information", function () {
            expect(scope.chosenRecipe[0]).toBeUndefined(); 
            scope.getData(0, "searchComplex");
            expect(scope.getData).toHaveBeenCalled();
        });
    });
});