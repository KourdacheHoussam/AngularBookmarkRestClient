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
        var url_bookmark_by_id="/bookmarks/get/";
        var url_add_bookmark="/bookmarks/add";
        var url_delete_all_bookmarks="/bookmarks/delete/all";
        var url_all_tags="/tags/getAll";
        var url_tag_by_id="/tags/get/";
        var url_add_tag="/tags/add";
        var url_delete_tag="/tags/delete/";
        var url_delete_all_tags="/tags/delete/all";
        //Store data
        var dataFactory={};
        /**
         * Get BOOOKMARKS  Methods
         * @returns {HttpPromise}
         */
        dataFactory.getBookmarks=function(){
            return $http.get(url_base+url_all_bookmarks);
        };

        dataFactory.getBookmarkByID=function(id){
            return $http.get(url_base+url_bookmark_by_id+id);
        };

        /**
         * POST (INSERT) BOOOKMARKS  Methods
         * @returns {HttpPromise}
         */
        dataFactory.addNewBookmark=function(name, type, description){  
            var data={};         
            return $http({
                method:'POST',
                headers: {'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'},
                url:url_base+url_add_bookmark+"?name="+name+"&type="+type+"&description="+description,
                transformRequest: function(obj) {
                    var str = [];
                    for(var p in obj)
                        str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));                    
                    return str.join("&");
                },
                data:data                
            });           
        };    

           /**
        * Delete Bookmarks Method
        * @returns {HttPromise}
        */
        dataFactory.deleteAllBookmarks=function(){
            return $http({
                    method:'DELETE',
                    headers: {'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'},
                    url:url_base+url_delete_all_bookmarks,
                    data:{data:"data"}
                });         
        };
         /**
         * Get TAGS  Methods
         * @returns {HttpPromise}
         */
        dataFactory.getTags=function(){          
            console.log("I'am in the factory");
            return $http.get(url_base+url_all_tags);
        };

        /**
         * POST (INSERT) TAGS  Methods
         * @returns {HttpPromise}
         */
        dataFactory.addNewTag=function(tagVal){
            var data={tag_value:tagVal};
            return $http({
                method:'POST',
                headers: {'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'},
                url:url_base+url_add_tag+"?tag_value="+tagVal,
                transformRequest: function(obj) {
                    var str = [];
                    for(var p in obj)
                        str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));                    
                    return str.join("&");
                },
                data:data                
            });           
        };    
        /**
        * Delete Tags Method
        * @returns {HttPromise}
        */
        dataFactory.deleteAllTags=function(){
            return $http({
                    method:'DELETE',
                    headers: {'Content-Type':'application/json'},
                    url:url_base+url_delete_all_tags ,
                    data:{tags:'tags'}
                });         
        };

        return dataFactory;     //Return final dataFactory methods results
  }]
);
