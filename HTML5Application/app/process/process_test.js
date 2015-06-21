'use strict';

describe('myApp.view1 module', function() {

  beforeEach(module('myApp.view1'));

  describe('view1 controller', function(){
    
    it('should setName', inject(function($controller) {
      //spec body
      var name = "Test Name"
      var $scope = {};
      var view1Ctrl = $controller('View1Ctrl', {$scope: $scope});
      $scope.setName(name);
      expect($scope.getName()).toBe(name);      
    }));

  });
});