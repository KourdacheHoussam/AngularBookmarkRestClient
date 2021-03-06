'use strict';

/**
 * @ngdoc overview
 * @name angularBookmarkRestClientApp
 * @description
 * # angularBookmarkRestClientApp
 *
 * Main module of the application.
 */
var app=angular.module('angularBookmarkRestClientApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ]);

app.config(function ($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })      
      .when('/bookmarks', {
        templateUrl:'views/bookmarks.html',
        controller: 'BookmarksrestCtrl'
      })
      .when('/tags', {
        templateUrl:'views/tags.html',
        controller:'TagsrestcontrollerCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
