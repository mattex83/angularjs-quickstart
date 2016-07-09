(function () {
    'use strict';

    var app = angular.module('demoApp', [
 		//module dependencies
 	]);

 	app.controller('MainCtrl', ['$scope', function($scope){
		var me = this;
 		me.title="My Hello World"
 	}])
})();