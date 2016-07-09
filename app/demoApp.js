(function () {
    'use strict';

    var app = angular.module('demoApp', [
 		//module dependencies
 	]);

 	app.controller('MainCtrl', ['$scope', function($scope){
 		this.title="My Hello World"
 	}])
})();