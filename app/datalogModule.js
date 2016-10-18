(function () {
    'use strict';

    var mod = angular.module('datalogModule', []);

	mod.service('DataService', ['$log','$q', '$http', function($log, $q, $http){
 		var service = {};

 		$log.info('DataService started');
 		
 		service.records =[];

 		service.getRecords = function(from, to){
 			var deferred = $q.defer();
 			var params = {
                
            };
            if(from && to){
            	params.from=from;
            	params.to=to;
            }
 			$http.get('http://localhost:8080/data',{params:params})
            .success(function (records) {
                service.records = records;
                deferred.resolve(records);
            })
            .error(function(response) {
                deferred.reject(response);
            });                
            return deferred.promise;
 		}

 		service.addRecord = function(data){
 			var deferred = $q.defer();
 			$http.post('http://localhost:8080/data',data)
            .success(function () {
                service.records.push(data);
                deferred.resolve();
            })
            .error(function() {
                deferred.reject();
            });                
            return deferred.promise;
 		}

 		service.deleteRecord = function(record){
 			$log.warn('removing record');
 			var deferred = $q.defer();
 			$http.delete('http://localhost:8080/data?timestamp='+record.timestamp)
 			.success(function () {
 				var records = service.records;
                var selectedIndex = -1;
	 			angular.forEach(records, function(value, index){
	 				if(record.timestamp===value.timestamp){
	 					selectedIndex=index;
	 				}
	 			});

	 			if(selectedIndex!==-1){
	 				records.splice(selectedIndex,1);
	 			}else{
	 				$log.error('record not found');
	 			}
                deferred.resolve();
            })
            .error(function() {
                deferred.reject();
            }); 
            return deferred.promise;
 		}


 		return service;
 	}]);

 	mod.controller('MainCtrl', ['$scope', function($scope){
		var me = this;
 		me.title="My Hello World"
 	}]);

	 mod.controller('TableCtrl', ['$scope','$log','DataService','$state', function($scope, $log, DataService, $state){

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

		me.goToAddPage = function(){
			$state.go('add');
		}
		

		me.sendQuery = function(){
 			var from = me.from;
 			var to = me.to;
			$log.info('from '+from.getTime());
			$log.info('to '+to.getTime());
			DataService.getRecords(from.getTime(),to.getTime())
			.then( function( data ) {
	            me.records = data;
	        })
	        .catch(function( error ){
	            $log.error('getRecords Failed!');
	        });
 		}

 	}]);

 	mod.controller('AddTemperatureCtrl', ['$scope','$log','DataService','$state', 
	 	function($scope, $log, DataService, $state){
		var me = this;

		this.newTempValue = null;

		me.goToTablePage = function(){
			$state.go('table');
		}

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