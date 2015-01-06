'use strict';

/**
 * @ngdoc function
 * @name angularBookmarkRestClientApp.controller:TagsrestcontrollerCtrl
 * @description
 * # TagsrestcontrollerCtrl
 * Controller of the angularBookmarkRestClientApp
 */
angular.module('angularBookmarkRestClientApp').controller('TagsrestcontrollerCtrl', 
		['$scope','RestFactory' ,function ($scope, RestFactory) {
			
	$scope.tags;

	//call get all tags function
	getAllTags();
	//get all tags function
	function getAllTags(){		
		RestFactory.getTags()
			.success(function (tags){
				$scope.tags=tags;
				}
			)
			.error(function	(error){
				console.log("unable to load:(");
			    $scope.status="Unable to load tags : Error : "+error;
				}
			)				
	};

	// Function called from tags.html to insert new tag to DB
	$scope.addNewTag=function(valTag){		
		console.log("Val of tag :"+valTag.val);
	};

    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.model={
    	id:"1",
    	msg:"hello"
    };
}]);
