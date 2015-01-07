'use strict';

/**
 * @ngdoc function
 * @name angularBookmarkRestClientApp.controller:RestcontrollerCtrl
 * @description
 * # RestcontrollerCtrl
 * Controller of the angularBookmarkRestClientApp
 */
angular.module('angularBookmarkRestClientApp').controller('BookmarksrestCtrl', 
    ['$scope', 'RestFactory', function ($scope, RestFactory) {
    
    $scope.bookmarks;    
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


    // Function called from bookmarks.html to insert new tag to DB
    $scope.addNewBookmark=function(Bookmark){
        RestFactory.addNewBookmark(Bookmark.name, Bookmark.type, Bookmark.description)
            .success(function (data, status, headers, config){
                $scope.bookmark_inserted=data;
                getBookmarks(); //refresh list of bookmarks
            })
            .error(function(data, status, headers, config){
                console.log("error insert status :"+status);
            })
    };

    //function call from bookmarks.html to delete all bookmarks
    $scope.deleteAllBookmarks=function(){
        RestFactory.deleteAllBookmarks()
            .success(function (data, status, headers, config){
                $scope.nb_bm_deleted=data;
                getBookmarks();
            })
            .error(function(data, status, headers, config){
                console.log("Arror deleting all bookmarks");
            })
    };
  }]
);
