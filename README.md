# Junior developer Vacancy test Solution
Based on my own [blank-app](https://github.com/sbiliaiev/angular-gulp-scratch), as a backend used [Backendless](http://backendless.com/). Consists of 4 modules (+UI-Router), 1 factory, 1 directive.
To pass through login form you need a valid login/password. Just type "**geektest**" in both fields.
If the login/password will not match with the correct ones you will get an error, achieved by Angular Validation.
 
### Requirements
You need to have [Node.js](https://nodejs.org/) installed on your machine.
Also you need [bower](https://bower.io/) and and [Gulp](http://gulpjs.com/), to install it type in terminal:
```
$ sudo npm install -g bower gulp-cli
```
### Installation
```
$ git clone https://github.com/sbiliaiev/geekTest.git
$ cd geekTest
$ npm install
```
It will install all the needed packages and vendor scripts/styles.

### Running
You can build 2 versions of app:
- for Development type in terminal `gulp build-dev`
- for Production type in terminal `gulp build-prod`

To run it on a server type `gulp serve-dev` for development version and `gulp serve-prod` for production version resp. Application will be available on [http://localhost:3000/#/hello](http://localhost:3000/#/hello)

### Tasks
For a complete list of available tasks take a look at [this page](https://github.com/sbiliaiev/angular-gulp-scratch/blob/master/README.md).
