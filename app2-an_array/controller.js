angular.module("arrayApp").controller("arrayController", function($scope, arrayService){

    $scope.getData = function() {
      $scope.users = arrayService.getData();
    }
    $scope.getData();
});
