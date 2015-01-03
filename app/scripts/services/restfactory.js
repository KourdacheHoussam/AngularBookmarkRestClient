'use strict';

/**
 * @ngdoc service
 * @name angularBookmarkRestClientApp.RestFactory
 * @description
 * # RestFactory
 * Factory in the angularBookmarkRestClientApp.
 */
angular.module('angularBookmarkRestClientApp').factory('RestFactory', ['$http', function ($http) {

        var url_base="http://localhost:9191/RestBookmarkManager/rest";
        var url_all_bookmarks="/bookmarks/getAll";
        var url_all_tags="";
        var url_all_favoriteBookmarks="";
        //Store data
        var dataFactory={};
        /**
         * Get Methods
         * @returns {HttpPromise}
         */
        dataFactory.getBookmarks=function(){
            console.log("I'am in the factory");
            return $http.get(url_base+url_all_bookmarks);
        };

        dataFactory.getTags=function(){

        };

        dataFactory.getFavoriteBookmarks=function(){
            return "";
        };

        /**
         * POST methods
         */
        dataFactory.addBookMark=function(){

        };

        dataFactory.addTag=function(){

        };

        dataFactory.addFavoriteBookmark=function(){

        };

        /**
         * Delete DATA
         * @param id
         */
        dataFactory.deleteBookmark=function(id){

        };

        dataFactory.deleteTag=function(id){

        };

        dataFactory.deleteFavoriteBookmark=function(){

        };

        //Return final dataFactory methods results
        return dataFactory;
  }]
);
