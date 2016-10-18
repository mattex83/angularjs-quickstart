(function () {
    'use strict';

    var app = angular.module('demoApp', [
 		'datalogModule',
 		'ui.router'
 	]);

	 app.config(function($stateProvider){
		$stateProvider
		.state('table', {
			url:'/table',
			templateUrl:'pages/table.html'
		})
		.state('add', {
			url:'/add',
			templateUrl:'pages/add.html'
		});
	});

	 app.run(function($state){
		$state.go('table');
	});


})();