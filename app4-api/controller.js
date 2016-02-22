angular.module("apiApp").controller("controller", function($scope, service){

  $scope.getChars = function(){
    service.getCharData().then(function(response){
      $scope.chars = response;
    });

  };
  $scope.getChars();
});
