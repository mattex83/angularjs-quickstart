(function () {
    'use strict';

    var app = angular.module('demoApp', [
 		//module dependencies
 	]);

 	app.controller('MainCtrl', ['$scope', function($scope){
		var me = this;
 		me.title="My Hello World"
 	}]);

	app.controller('TableCtrl', ['$scope', function($scope){
		var me = this;
 		me.records = [];

 		var now = new Date();
 		me.records.push({
 			timestamp: now.getTime(),
 			temperature: 23
 		});

 		me.records.push({
 			timestamp: now.getTime()-3600000,
 			temperature: 24
 		});

 	}]);
})();