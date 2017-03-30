'use strict';

angular.module('MarvelApp')
  .controller('NavbarController', ['$scope', '$location', function($scope, $location){
    $scope.isActive = function(viewLocation) {
      return viewLocation === $location.path();
    };
  }]);
