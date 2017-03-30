'use strict';

angular.module('MarvelApp', ['ngResource', 'ngRoute', 'ui.bootstrap'])
  .config(['$locationProvider', '$routeProvider', '$httpProvider', function($locationProvider, $routeProvider, $httpProvider) {
    $locationProvider.html5Mode(true);
    $httpProvider.interceptors.push('httpInterceptor');
    $routeProvider
    .when('/', {
      templateUrl: 'app/views/home/index.html'
    })
    .when('/comics', {
      templateUrl: 'app/views/comic/index.html',
      controller: 'ComicController',
      controllerAs: 'comicCtrl'
    })
    .when('/comic/:id', {
      templateUrl: 'app/views/comic/single.html',
      controller: 'ComicController',
      controllerAs: 'comicCtrl'
    })
    .when('/creators', {
      templateUrl: 'app/views/creator/index.html',
      controller: 'CreatorController',
      controllerAs: 'creatorCtrl'
    })
    .when('/creator/:id', {
      templateUrl: 'app/views/creator/single.html',
      controller: 'CreatorController',
      controllerAs: 'creatorCtrl'
    })
    .otherwise({redirectTo: '/'});
  }]);
