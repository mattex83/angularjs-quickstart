# angularjs-quickstart

prerequisites:
NodeJS >0.10

This tutorial is organized in several steps.
Each step is a branch.

To start this tutorial on your local computer do from your command line

```bash
git clone https://github.com/mattex83/angularjs-quickstart
cd angularjs-quickstart
git checkout step-1
npm install
npm start
```

* Once npm start command is running, the application will be available on
localhost:8080/app

* to switch between tutorial steps run from the project directory


```bash
git checkout <step_name>
```

If you want to see how the application will be at the end of the tutorial checkout the master branch
```bash
git checkout master
```

You may edit the code from any text editor, but if you want to use Eclipse, just import the folder as existing project

##Step -1 ng-app and curly brackets
To get the code to start the tutorial from here run the following command:

```bash
git checkout step-1
```

In angularJS curly brackets are expression which are evaluated by the engine. You can put here variables, or operations.

ng-app: identifies the angularjs app. There is only one of these tags in an application. 

Everything is not in the container of ng-app is not parsed by the angular engine. Usually is put in the body tag

The project at this step starts empty. There is just an hello world in plain html.

First step add the angular library on the project. 
https://ajax.googleapis.com/ajax/libs/angularjs/1.5.7/angular.min.js

Then include these two sections: 
```html
<section>
   <h1>Hello {{'Wor'+'ld'}} with no AngularJS</h1> 
</section>

<section ng-app>
   <h1>Hello {{'Wor'+'ld'}} from AngularJS</h1> 
</section> 
```
and see the difference between what is inside the ng-app and what is not.
Play with the content of curly brackets to make operation with numbers or string

##Step 0 Application structure and Bootstrap style
To get the code to start the tutorial from here run the following command:

```bash
git checkout step0
```
First of all remove the sections we added in the previous step.

Let's add bootstrap to our application as explined in http://getbootstrap.com adding
```html
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossorigin="anonymous">
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js" integrity="sha384-0mSbJDEHialfmuBBQP6A4Qrprq5OVfW37PRR3j5ELqxss1yVqOtnepnHVP9aJ7xS" crossorigin="anonymous"></script>
```
bootstrap's javascript library needs JQuery so we need to add another script tag for JQuery just to avoid errors on console.
```html
<script   src="https://code.jquery.com/jquery-2.2.4.min.js"   integrity="sha256-BbhdlvQf/xTY9gja0Dq3HiwQF8LaCRTXxZKRutelT44="   crossorigin="anonymous"></script>
```
After that put a static table with 3 columns inside the body: one for delete button, one for timestamp and one for value, using plain html tags. 
```html
<h1>Hello {{'Wor'+'ld'}} from AngularJS</h1> 
<table class="table">
      <tr>
        <th>Delete</th>
        <th>Temperature</th>
        <th>Timestamp</th> 
      </tr>
      <tr>
        <td><button type="button" class="btn btn-default">x</button>
        <td>24</td>
        <td>25-06-2016</td> 
      </tr>
    </table>
```
style the table with bootstrap classes.
```html
<table class="table">
```
create a custom css file in the app folder in order to give some margin to the table. E.g. 20% left, 20% right and 40px top.

Don't forget to add it in the page HEAD!
```html
<table class="table mytable">
```
Now we have to initialize our app.

Create a javascript file in the app folder, import it in the page HEAD section and declare there your angular application
```javascript
var app = angular.module('demoApp', [
 	//module dependencies
]);
```
finally add the ng-app tag specifying the name of your application in the body tag
```html
<body ng-app="demoApp">
```
### Usefull Links
* http://www.w3schools.com/html/html_tables.asp

* http://getbootstrap.com/css/#buttons

* http://getbootstrap.com/css/#tables

* https://docs.angularjs.org/api/ng/directive/ngApp

##Step 1 Add a simple controller in your application
To get the code to start the tutorial from here run the following command:

```bash
git checkout step1
```

replace the h1 tag with a div linked to a controller called MainController

```html
<h1>Hello {{'Wor'+'ld'}} from AngularJS</h1> 
```
```html
<div ng-controller="MainCtrl as main">
    <h1>{{main.title}}</h1>
</div>
```
On your js file create the controller.
```javascript
var app = angular.module('demoApp', [
    //module dependencies
]);

app.controller('MainCtrl', ['$scope', function($scope){
    var me = this;
    me.title="My Hello World"
}])
```
##Step 2 Fill the table with static data and filters
To get the code to start the tutorial from here run the following command:

```bash
git checkout step2
```
On your js file create a new controller called TableCtrl with an array of records.
Each record must have the following structure:
```javascript
var record = {
    timestamp: <millisecondsFromEpoch>
    temperature: <aNumber>
}
```
Modify the table in your index.html putting the new controller 'TableCtrl as table' and an ng-repeat closure to itereate the records collection

Finally filter the timestamp to show the date following the format 'yyyy-MM-dd HH:mm:ss'

### Usefull Links
* https://docs.angularjs.org/guide/controller

* https://docs.angularjs.org/guide/filter

* https://docs.angularjs.org/api/ng/filter/date

##Step 3 Create a form to log a new temperature and add a click handler on the table to remove records
To get the code to start the tutorial from here run the following command:

```bash
git checkout step3
```
1) Create a form element over the table. The form must contain an input field of type number and a button to submit the form.

The div containing the form element must refer to a new controller called AddTemperatureCtrl
```html
 <div ng-controller="AddTemperatureCtrl as addTemp">

        <form name="myForm" class="form mytable" ng-submit="addTemp.addValue()">
            ...
          </div>
            
        </form>
    </div>
```
The submit button must be enabled only if the form is valid.

The input field is valid only if a value is present and in the range -40 / 50.

On javascript side the function linked to ng-submit will just log the new value on console (we cannot add values to another controller at the moment)

2) create an handler for the delete button on table with ng-click. 
On javascript side the function linked will just log the value we want to remove on console.

3) try to put the input field and the add button in a row using the layouting system of bootstrap 

```html
<div class="row">              
	<div class="col-md-8">  
	…
	</div>              
	<div class="col-md-4">
	…
	</div>          
</div>
```
### Usefull Links
* https://docs.angularjs.org/guide/forms

* http://getbootstrap.com/css/#forms

* http://getbootstrap.com/css/#grid

* https://docs.angularjs.org/api/ng/service/$log

##Step 4 Create a form to query the temperature table
To get the code to start the tutorial from here run the following command:

```bash
git checkout step4
```
Create a form element into the div controlled by TableCtrl. 

The form must contain two inputs field of type datetime-local.

On javascript side the function linked with ng-submit will just log the two dates in milliseconds from epoch.

To get milliseconds from a date object;

```javascript
millis = date.getTime();
```
### Usefull Links

* http://www.w3schools.com/html/html_form_input_types.asp

##Step 5 Create a service to manage temperature data
To get the code to start the tutorial from here run the following command:

```bash
git checkout step5
```
1) Create a new service called DataService containing 3 functions and a records array keeping the state of our data logger
    * getRecords()
    ** returning service.records
    * addRecord({timestamp:<millisfromepoch>,temperature:<value>})
    ** adding a new record into the service.records array
    * deleteRecord(timestamp)
    ** removing the item in service.records with the same timestamp

Use $q service to make the service functions asynchronous even if now it seems to be useless. For instance

```javascript
service.getRecords = function(){
    var deferred = $q.defer();
    
    $timeout(function(){	 
    	deferred.resolve(service.records);
    },1000);

                    
    return deferred.promise;
    
}
```

2) Use DataService in TableCtrl and AddTemperatureCtrl to read, create and remove records. Remember to add the dependency properly.
```javascript
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
```
### Usefull Links

* https://docs.angularjs.org/guide/services

* https://docs.angularjs.org/api/ng/function/angular.forEach

* https://docs.angularjs.org/api/ng/service/$q

##Step 6 connect to our server side 
To get the code to start the tutorial from here run the following command:

```bash
git checkout step6
```

1) Use the $http service to get, post and delete data from the server

* to get temperature records 
** GET http://localhost:8080/data
* to post a new temperature 
** POST http://localhost:8080/data
* to delete a temeprature record 
** DELETE http://localhost:8080/data?timestamp=xxx

**Remember to update the service.records collection, otherwise your table will not get any update**
For istance:
```javascript
...
$http.post('http://localhost:8080/data',data)
.success(function () {
    service.records.push(data);
    deferred.resolve();
})
.error(function() {
    deferred.reject();
});  
...
```

2) Add the query feature to our app!

Just add the from and to parameters into the getRecords functions and pass them through the controller.

### Usefull Links

* https://docs.angularjs.org/api/ng/service/$http


##Step 7 Create a new module
To get the code to start the tutorial from here run the following command:

```bash
git checkout step7
```

Let’s change our application structure creating a module with our service and our controllers.

1) Create a file called datalogModule.js where we move our code.

```javascript
var mod = angular.module("datalogModule",[]); 

mod.controller("myController",function () {
…
}); 
```

2) Add the module dependency to our app
```javascript
var app = angular.module('demoApp', ['datalogModule']);
```
**Remember to add the new js file to index.html**

### Usefull Links

* https://docs.angularjs.org/guide/module

