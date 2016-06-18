/**
 * Created by MacBook_Pro on 4/10/16.
 */


(function( $ ) {

    $.crud = function(){

        var self = this;

        var methods = {
            route : function(type){
               
               if(type == "path") {

                    var location = window.location.pathname;

                    if(slice) {

                        var location_position = location.split("/");

                        return location_position[slice];

                    } else {
                        return location;
                    }

                } else if(type == "url") {

                    var location = window.location.href;

                    if(slice) {

                        var location_position = location.split("/");

                        return location_position[slice];

                    } else {

                        return location;
                    }
                    
                return this;
                
                }
                
            },
            create : function(url, data, dataType){

               return $.ajax({
                    method: "POST",
                    url: url,
                    data: typeof data !== 'undefined' ? data : '',
                    dataType: typeof dataType !== 'undefined' ? dataType : 'text'
                });

            },
            read : function(url, data, dataType){

                   return $.ajax({
                        method: "GET",
                        url: url,
                        data: typeof data !== 'undefined' ? data : '',
                        dataType: typeof dataType !== 'undefined' ? dataType : 'text'
                    });

            },
            update: function(method, url, data, dataType) {

                return $.ajax({
                    method: typeof method !== 'undefined' ? method : 'POST',
                    url: url,
                    data: typeof data !== 'undefined' ? data : '',
                    dataType: typeof dataType !== 'undefined' ? dataType : 'text'
                });

            },
            delete: function(method, url, data, dataType) {

                return $.ajax({
                    method: typeof method !== 'undefined' ? method : 'POST',
                    url: url,
                    data: typeof data !== 'undefined' ? data : '',
                    dataType: typeof dataType !== 'undefined' ? dataType : 'text'
                });

            }

        };

            return methods;

    }

}( jQuery ));
