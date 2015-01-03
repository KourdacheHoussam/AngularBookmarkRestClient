'use strict';

/**
 * @ngdoc function
 * @name angularBookmarkRestClientApp.controller:RestcontrollerCtrl
 * @description
 * # RestcontrollerCtrl
 * Controller of the angularBookmarkRestClientApp
 */
angular.module('angularBookmarkRestClientApp').controller('BookmarksrestCtrl', ['$scope', 'RestFactory', function ($scope, RestFactory) {
    
    $scope.bookmarks;
    $scope.favoriteBookmarks;
    $scope.tags;
    $scope.status;

    //Call getBookmarks function
    getBookmarks();
    console.log("I'am in controller");
    //getBookmarks function
    function getBookmarks(){
        RestFactory.getBookmarks()
            .success(
                function (bookmarks){
                    $scope.bookmarks=bookmarks;
                    console.log($scope.bookmarks);
                }
            )
            .error(
                function(error){
                     console.log("unable to load:(");
                    $scope.status="Unable to load bookmarks : Error : "+error;
                }
            )
    };


    //find bookmark by id
    function findBookmarkById(){
        console.log("The id entered: " + this.idbookmark);
        if(this.idbookmark==""){
            return false;
        }

        RestFactory.getBookmarkByID(this.idbookmark).
            success(function(bookmark){
                $scope.foundBookmark=bookmark;
            })  
            .error(function(error){
                $scope.status="Unable to load bookmarks : Error : "+error;
            })        
    };
  }]
);
