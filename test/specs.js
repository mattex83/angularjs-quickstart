describe('AddTemperatureCtrl', function(){
    var controller, scope, DataService, q;//we'll use these in our tests

    //mock Application to allow us to inject our own dependencies
    beforeEach(module('datalogModule'));

    //test add record which call DataService

    //mock the controller for the same reason and include $rootScope and $controller
    beforeEach(inject(function($rootScope, $controller, $q){
        DataService = jasmine.createSpyObj('DataService', ['addRecord']);

        q = $q;
        //create an empty scope
        scope = $rootScope.$new();
        //declare the controller and inject our empty scope
        controller = $controller('AddTemperatureCtrl', {
            '$scope': scope,
            'DataService':DataService,
            '$state':null,
            '$q':q
        });

        DataService.addRecord.and.callFake(function() {
            var deferred = q.defer();
            deferred.resolve();
            return deferred.promise;
        });

        scope.$apply();
    }));

    it('should call DataService.addRecord', function() {
 
        controller.newTempValue = 12;
        
        controller.addValue();
        expect(DataService.addRecord).toHaveBeenCalled();
    });

});