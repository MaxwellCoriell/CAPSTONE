'use strict';
 
angular.module('MarvelApp')
  .directive('searchAlphabet', function() {
    return {
      restrict: 'E',
      templateUrl: 'app/views/directives/search-alphabet.html',
      scope: {
        'attr' : '@'
      },
      controller: 'SearchController',
      controllerAs: 'searchCtrl'
    };
  });
