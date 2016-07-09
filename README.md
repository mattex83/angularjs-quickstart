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
Everything is not in the container of ng-app iis not parsed by the angular engine. Usually is put in the body tag

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