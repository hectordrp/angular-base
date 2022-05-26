![Angularlogo](https://github.com/hectordrp/angular-base/blob/main/src/assets/img/AngularImg.png?raw=true)

# Seed Project

This is the seed project that I use for Angular apps

## Overview 
used packages:
- [Angular 12](http://angular.io/)
- [Redux](http://redux.js.org/) using [@ngrx/Store](https://github.com/ngrx/store)
- [ng-bootstrap](https://www.npmjs.com/package/@ng-bootstrap/ng-bootstrap)
- [Angular Material 2](https://material.angular.io/)
- [ngx-charts](https://swimlane.gitbook.io/ngx-charts/)

## Getting started

### Installation

You can install it by simply forking the repo:

```
# clone the repo
$ git clone https://github.com/hectordrp/angular-base.git [your-project-name]
$ cd [your-project-name]
```

### Development and builds

Below are the scripts to dev, build, and test this seed project:

#### Install dependencies

```console
# use `npm` to install the deps
$ npm install
```

#### Development server

```
# dev server
$ ng serve
```

And then,

- Navigate to `http://localhost:4200/` for the SPA (browser) build.

The app will automatically re-compile if you change any of the source files.

#### Build

```
# development build
$ ng build

# production build
$ ng build --prod

```

The build artifacts will be stored in the `dist/` directory.

#### Running tests

```
# run unit tests
$ ng test
```

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.
