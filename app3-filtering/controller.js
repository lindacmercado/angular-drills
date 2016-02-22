angular.module("app3").controller("controller", function($scope, service) {

    $scope.getData = function() {
      $scope.users = service.getData();
    }
    $scope.getData();

});
