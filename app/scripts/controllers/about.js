'use strict';

/**
 * @ngdoc function
 * @name angularBookmarkRestClientApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularBookmarkRestClientApp
 */
angular.module('angularBookmarkRestClientApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
