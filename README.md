# Recipe Recommender Application

A Node.js and Angular.js app using [Express 4](http://expressjs.com/) and [AngularJS v1.6.0](http://angularjs.org/).

This application runs on Heroku. See the links at the bottom of this page for Heroku documentation.

## Running Locally

Make sure you have [Node.js](http://nodejs.org/) and the [Heroku Toolbelt](https://toolbelt.heroku.com/) installed.
Runnning npm install (The third command below) will install the other dependencies such as express.

```sh
$ git clone https://github.com/PhilipCorr/recipe-recommender
$ cd recipe-recommender
$ npm install
$ npm start
```

Your app should now be running on [localhost:5000](http://localhost:5000/).

## Deploying to Heroku

```
$ heroku create
$ git push heroku master
$ heroku open
```
or

[![Deploy to Heroku](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy)

## Development 
AngularJS MVC framework used for application structure.
Spoonacular api used to fetch recipes.

See index.html for starting page.  
ng-app initialises the application.  
ng-init initialises the app data.  
ng-view is part of routing in angularjs and controls which partial html is injected into the application.  

## Documentation

For more information about using Node.js on Heroku, see these Dev Center articles:

- [Getting Started with Node.js on Heroku](https://devcenter.heroku.com/articles/getting-started-with-nodejs)
- [Heroku Node.js Support](https://devcenter.heroku.com/articles/nodejs-support)
- [Node.js on Heroku](https://devcenter.heroku.com/categories/nodejs)
- [Best Practices for Node.js Development](https://devcenter.heroku.com/articles/node-best-practices)
- [Using WebSockets on Heroku with Node.js](https://devcenter.heroku.com/articles/node-websockets)
