'use strict';

angular.module('MarvelApp')
  .controller('SearchController', ['$scope', 'MarvelCreators', 'MarvelComics', function($scope, MarvelCreators, MarvelComics){
    var controller = this;
    var counter = 0;

    // Alphabet filtering
    $scope.alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J',
      'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X',
      'Y', 'Z'];

    controller.filterByAlphabet = function(char) {
      if($scope.attr === 'comics') {
        MarvelComics.comics.get({"limit": 48, "titleStartsWith": char}, function(comics) {
          MarvelComics.values = comics.data.results;
          MarvelComics.letter = char;
        });
      } else if ($scope.attr === 'creators') {
        MarvelCreators.creators.get({"limit": 48,"firstNameStartsWith": char}, function(creators){
          MarvelCreators.values = creators.data.results;
          MarvelCreators.letter = char;
        });
      }
    };

  }]);
