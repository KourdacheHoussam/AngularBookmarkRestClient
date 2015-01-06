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
			})
			.error(function	(error){
				console.log("unable to load:(");
			    $scope.status="Unable to load tags : Error : "+error;
			})				
	};

	// Function called from tags.html to insert new tag to DB
	$scope.addNewTag=function(valTag){
		RestFactory.addNewTag(valTag.val)
			.success(function (data, status, headers, config){
				$scope.tag_inserted=data;
				getAllTags(); //refresh list of tags
			})
			.error(function(data, status, headers, config){
				console.log("error insert status :"+status);
			})
	};

	// Function called form tags.html to delete all tags stored in Server database
	$scope.deleteAllTags=function(){
		RestFactory.deleteAllTags()
			.success(function(data,status, headers, config){
				$scope.number_tags_deleted=data;
				getAllTags(); //refresh list of tags
			})
			.error(function(data, status, headers, config){
				console.log("Problem occured while deleting  tags stored in remote database");
			})
	};
}]);
