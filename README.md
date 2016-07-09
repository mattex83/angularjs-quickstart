# angularjs-quickstart

prerequisites:
NodeJS >0.10

This tutorial is organized in several steps.
Each step is a branch.

To start this tutorial on your local computer do from your command line

```bash
git clone https://github.com/mattex83/angularjs-quickstart
cd angularjs-quickstart
npm install
npm start
```

* The application we will finally develop will be available on
localhost:8010/app

* to switch between tutorial steps run from the project directory

You may edit the code from any text editor, but if you want to use Eclipse, just import the folder as existing project

```bash
git checkout <step_name>.
```
##Step -1 ng-app and curly brackets
To get the code to start the tutorial from here run the following command:

```bash
git checkout step-1.
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
git checkout step0.
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

##Step 1 Add a simple controller in your application
To get the code to start the tutorial from here run the following command:

```bash
git checkout step1.
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