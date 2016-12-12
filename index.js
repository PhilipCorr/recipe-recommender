var express = require('express'); // import express module
var app = express();
var unirest = require('unirest');

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
//app.set('view engine', 'ejs');

//app.get('/', function(request, response) {
//  response.render('pages/index');
//});

app.get('/', (req, res) => {
   res.sendFile('index.html', {
     root: 'views/pages'
   });
});


app.get('/homepage', function(request, response) {
  response.render('pages/homepage', {
       recipe_type: "",
        recipeTitles: "",
        recipeImages: ""

    });
});



app.get('/american', function(request, response) {
  unirest.get("https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/searchComplex?addRecipeInformation=false&cuisine=american&excludeIngredients=coconut%2C+mango&fillIngredients=false&includeIngredients=onions%2C+lettuce%2C+tomato&intolerances=peanut%2C+shellfish&limitLicense=false&maxCalories=1500&maxCarbs=100&maxFat=100&maxProtein=100&minCalories=150&minCarbs=5&minFat=5&minProtein=5&number=10&offset=0&query=burger&ranking=1&type=main+course")
  .header("X-Mashape-Key", "UhgpDYqy2pmsh8nnaEksOhY83DJ2p1PHdyfjsnjmKT2rQVIH6S")
  .header("Accept", "application/json")
  .end(function (result) {
    var titles = [];
    var images =[];
    var calories =[];
    var protein = [];
    var fat = [];
    var carbs = [];

    result.body.results.forEach(function(recipe){
      console.log(recipe)
      titles = titles.concat(recipe.title)
      images = images.concat(recipe.image)
      calories = calories.concat(recipe.calories)
      protein = protein.concat(recipe.protein)
      fat = fat.concat(recipe.fat)
      carbs = carbs.concat(recipe.carbs)
    });

    console.log("result.body is:\n\n")
    console.log(images)

    response.render('pages/recipes', {
       recipe_type: "American",
        recipeTitles: titles,
        recipeImages: images,
        recipeCalories: calories,
        recipeProtein: protein,
        recipeFat: fat,
        recipeCarbs: carbs

    });
  })
});

app.get('/italian', function(request, response) {
  unirest.get("https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/searchComplex?addRecipeInformation=false&cuisine=italian&fillIngredients=false&intolerances=peanut&limitLicense=false&maxCalories=1500&maxCarbs=100&maxFat=100&maxProtein=100&minCalories=150&minCarbs=5&minFat=5&minProtein=5&number=10&offset=0&ranking=1&type=main+course")
  .header("X-Mashape-Key", "UhgpDYqy2pmsh8nnaEksOhY83DJ2p1PHdyfjsnjmKT2rQVIH6S")
  .header("Accept", "application/json")
  .end(function (result) {
  	var titles = [];
    var images =[];
    var calories =[];
    var protein = [];
    var fat = [];
    var carbs = [];

  	result.body.results.forEach(function(recipe){
  		console.log(recipe)
  		titles = titles.concat(recipe.title)
      images = images.concat(recipe.image)
      calories = calories.concat(recipe.calories)
      protein = protein.concat(recipe.protein)
      fat = fat.concat(recipe.fat)
      carbs = carbs.concat(recipe.carbs)
  	});

    console.log("result.body is:\n\n")
    console.log(images)


    response.render('pages/recipes', {
        recipe_type: "Italian",
    		recipeTitles: titles,
        recipeImages: images,
        recipeCalories: calories,
        recipeProtein: protein,
        recipeFat: fat,
        recipeCarbs: carbs

    });
  })
});

app.get('/indian', function(request, response) {
  unirest.get("https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/searchComplex?addRecipeInformation=false&cuisine=indian&fillIngredients=false&includeIngredients=onions%2C+tomato&intolerances=peanut&limitLicense=false&&number=10&offset=0&ranking=1&type=main+course")
  .header("X-Mashape-Key", "UhgpDYqy2pmsh8nnaEksOhY83DJ2p1PHdyfjsnjmKT2rQVIH6S")
  .header("Accept", "application/json")
  .end(function (result) {
  	var titles = [];
    var images =[];
    var calories =[];
    var protein = [];
    var fat = [];
    var carbs = [];

  	result.body.results.forEach(function(recipe){
  		console.log(recipe)
  		titles = titles.concat(recipe.title)
      images = images.concat(recipe.image)
  	});

    console.log("result.body is:\n\n")
    console.log(images)


    response.render('pages/recipes', {
        recipe_type: "Indian",
    		recipeTitles: titles,
        recipeImages: images,
        recipeCalories: calories,
        recipeProtein: protein,
        recipeFat: fat,
        recipeCarbs: carbs

    });
  })
});

app.get('/irish', function(request, response) {
  unirest.get("https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/searchComplex?addRecipeInformation=false&cuisine=irish&fillIngredients=false&includeIngredients=potatoes%2C+carrots&intolerances=peanut&limitLicense=false&&number=10&offset=0&ranking=1&type=main+course")
  .header("X-Mashape-Key", "UhgpDYqy2pmsh8nnaEksOhY83DJ2p1PHdyfjsnjmKT2rQVIH6S")
  .header("Accept", "application/json")
  .end(function (result) {
  	var titles = [];
    var images =[];
    var calories =[];
    var protein = [];
    var fat = [];
    var carbs = [];

  	result.body.results.forEach(function(recipe){
  		console.log(recipe)
  		titles = titles.concat(recipe.title)
      images = images.concat(recipe.image)
  	});

    console.log("result.body is:\n\n")
    console.log(images)

    response.render('pages/recipes', {
        recipe_type: "Irish",
    		recipeTitles: titles,
        recipeImages: images,
        recipeCalories: calories,
        recipeProtein: protein,
        recipeFat: fat,
        recipeCarbs: carbs

    });
  })
});

app.get('/chinese', function(request, response) {
  unirest.get("https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/searchComplex?addRecipeInformation=false&cuisine=chinese&fillIngredients=false&includeIngredients=chicken%2C+rice&intolerances=peanut&limitLicense=false&&number=10&offset=0&ranking=1&type=main+course")
  .header("X-Mashape-Key", "UhgpDYqy2pmsh8nnaEksOhY83DJ2p1PHdyfjsnjmKT2rQVIH6S")
  .header("Accept", "application/json")
  .end(function (result) {
  	var titles = [];
    var images =[];
    var calories =[];
    var protein = [];
    var fat = [];
    var carbs = [];

  	result.body.results.forEach(function(recipe){
  		console.log(recipe)
  		titles = titles.concat(recipe.title)
      images = images.concat(recipe.image)
  	});

    console.log("result.body is:\n\n")
    console.log(images)

    response.render('pages/recipes', {
        recipe_type: "Chinese",
    		recipeTitles: titles,
        recipeImages: images,
        recipeCalories: calories,
        recipeProtein: protein,
        recipeFat: fat,
        recipeCarbs: carbs

    });
  })
});

app.get('/mexican', function(request, response) {
  unirest.get("https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/searchComplex?addRecipeInformation=false&cuisine=mexican&fillIngredients=false&includeIngredients=tomato%2C+beans&intolerances=peanut&limitLicense=false&&number=10&offset=0&ranking=1&type=main+course")
  .header("X-Mashape-Key", "UhgpDYqy2pmsh8nnaEksOhY83DJ2p1PHdyfjsnjmKT2rQVIH6S")
  .header("Accept", "application/json")
  .end(function (result) {
  	var titles = [];
    var images =[];
    var calories =[];
    var protein = [];
    var fat = [];
    var carbs = [];

  	result.body.results.forEach(function(recipe){
  		console.log(recipe)
  		titles = titles.concat(recipe.title)
      images = images.concat(recipe.image)
  	});

    console.log("Images:\n\n")
    console.log(images)


    response.render('pages/recipes', {
        recipe_type: "Mexican",
    		recipeTitles: titles,
        recipeImages: images,
        recipeCalories: calories,
        recipeProtein: protein,
        recipeFat: fat,
        recipeCarbs: carbs
    });
  })
});

app.listen(app.get('port')	, function() {
  console.log('Node app is running on port', app.get('port'));
});

