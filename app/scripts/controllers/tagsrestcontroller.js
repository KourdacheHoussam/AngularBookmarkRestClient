'use strict';

/**
 * @ngdoc function
 * @name angularBookmarkRestClientApp.controller:TagsrestcontrollerCtrl
 * @description
 * # TagsrestcontrollerCtrl
 * Controller of the angularBookmarkRestClientApp
 */
angular.module('angularBookmarkRestClientApp').controller('TagsrestcontrollerCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.model={
    	id:"1",
    	msg:"hello"
    };
});
