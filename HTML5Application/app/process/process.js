'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'process/process.html',
    controller: 'ProcessViewCtrl'
  });
}])

.controller('ProcessViewCtrl', ['$scope',function($scope) {
        $scope.name ;
        $scope.setName = function(name){
            $scope.name = name;
        };
        $scope.getName = function(){
            return $scope.name;
        };
}]);