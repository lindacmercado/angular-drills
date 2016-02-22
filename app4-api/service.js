angular.module("apiApp").service("service", function($http){


  this.getCharData = function(){
        return $http({
            method: 'GET',
            url: 'http://swapi.co/api/people/'
        }).then(function(response) {
          return response.data;
        });
    };
});
