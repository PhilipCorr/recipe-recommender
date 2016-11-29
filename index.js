var cool = require('cool-ascii-faces');
var express = require('express'); // import express module
var app = express();
var unirest = require('unirest');

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('pages/index');
});

app.get('/cool', function(request, response) {
  response.send(cool());
});

app.get('/recipe', function(request, response) {
  unirest.get("https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/searchComplex?addRecipeInformation=false&cuisine=american&excludeIngredients=coconut%2C+mango&fillIngredients=false&includeIngredients=onions%2C+lettuce%2C+tomato&intolerances=peanut%2C+shellfish&limitLicense=false&maxCalories=1500&maxCarbs=100&maxFat=100&maxProtein=100&minCalories=150&minCarbs=5&minFat=5&minProtein=5&number=10&offset=0&query=burger&ranking=1&type=main+course")
  .header("X-Mashape-Key", "UhgpDYqy2pmsh8nnaEksOhY83DJ2p1PHdyfjsnjmKT2rQVIH6S")
  .header("Accept", "application/json")
  .end(function (result) {

  	var titles = [];
    var images =[];

  	console.log("result.status is:\n\n")
  	console.log(result.status)

  	console.log("result.headers is:\n\n")
    console.log(result.headers)

    console.log("result.body is:\n\n")
  	console.log(result.body)

    	console.log("recipe titles:")
    	result.body.results.forEach(function(recipe){
    		console.log(recipe)
    		titles = titles.concat(recipe.title)
        images = images.concat(recipe.images)
    	});

    response.render('pages/recipes', {
    		recipeTitles: titles

    });
  })
});

app.listen(app.get('port')	, function() {
  console.log('Node app is running on port', app.get('port'));
});

