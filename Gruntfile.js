module.exports = function(grunt){

	grunt.loadNpmTasks('grunt-karma');

	grunt.initConfig({
		karma: { //task
			unit: { //sub-task
				options: {
					frameworks: ['jasmine'],
					singleRun: true,
					browsers: ['PhantomJS'],
					files: [
					'node_modules/angular/angular.js',
					'node_modules/angular-route/angular-route.js',
					'node_modules/angular-mocks/angular-mocks.js',
					'public/js/recipe-app.js',
					'public/js/controllers/listController.js',
					'public/js/services/listService.js',
					'public/js/controllers/recipeController.js',
					'public/js/services/recipeService.js',
					'public/unit/*.js'
					]
				}
			}
		}
	});

};