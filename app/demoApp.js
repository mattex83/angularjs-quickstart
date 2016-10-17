(function () {
    'use strict';

    var app = angular.module('demoApp', [
 		//module dependencies
 	]);

	app.service('DataService', ['$log','$q','$timeout', function($log, $q, $timeout){
 		var service = {};

 		$log.info('DataService started');
 		
 		service.records =[];

 		service.getRecords = function(){
			var deferred = $q.defer();
 			$timeout(function(){	 
            	deferred.resolve(service.records);
			},1000);
                            
            return deferred.promise;
 			
 		}

 		service.addRecord = function(data){
 			$log.info('add record');
			var deferred = $q.defer();
 			$timeout(function(){	 
 				service.records.push(data);
            	deferred.resolve(data);
			},1000);
                            
            return deferred.promise;
 		}

 		service.deleteRecord = function(record){
 			$log.warn('removing record');
			var deferred = $q.defer();
 			var selectedIndex = -1;
 			angular.forEach(service.records, function(value, index){
 				if(record.timestamp===value.timestamp){
 					selectedIndex=index;
 				}
 			});

			$timeout(function(){	 
 				if(selectedIndex!==-1){
					service.records.splice(selectedIndex,1);
					deferred.resolve();
				}else{
					$log.error('record not found');
					deferred.reject();
				}
			},1000);
 			
                            
            return deferred.promise;
 			
 		}


 		return service;
 	}]);

 	app.controller('MainCtrl', ['$scope', function($scope){
		var me = this;
 		me.title="My Hello World"
 	}]);

	 app.controller('TableCtrl', ['$scope','$log','DataService', function($scope, $log, DataService){

 		var me = this;
 		me.records = [];

 		DataService.getRecords()
		.then( function( data ) {
            me.records = data;
        })
        .catch(function( error ){
            $log.error('getRecords Failed!');
        });

		me.deleteRecord = function(record){
 			DataService.deleteRecord(record)
			.then( function( ) {
				$log.info('record removed');
			})
			.catch(function( error ){
				$log.error('record not removed');
			});
 		}
		

		me.sendQuery = function(){
 			var from = me.from;
 			var to = me.to;
			$log.info('from '+from.getTime());
			$log.info('to '+to.getTime());
 		}

 	}]);

 	app.controller('AddTemperatureCtrl', ['$scope','$log','DataService', function($scope, $log, DataService){
		var me = this;

		this.newTempValue = null;
		me.addValue = function () {
			
 			var now = new Date();
			DataService.addRecord({
				temperature:this.newTempValue,
				timestamp:now.getTime()
			})
			.then( function( ) {
				$log.info('record added');
			})
			.catch(function( error ){
				$log.error('record not added');
			});

			this.newTempValue = null;
		};
 	}]);

})();