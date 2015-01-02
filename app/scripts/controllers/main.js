'use strict';

/**
 * @ngdoc function
 * @name angularBookmarkRestClientApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularBookmarkRestClientApp
 */
angular.module('angularBookmarkRestClientApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
