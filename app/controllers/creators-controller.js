'use strict';

angular.module('MarvelApp')
  .controller('CreatorController', ['$scope', '$routeParams', 'MarvelCreators', function($scope, $routeParams, MarvelCreators){
    var controller = this;
    var counter = 1; // offset to avoid empty value at beginning of array

    $scope.loadMore = function(){
      counter += 24;
      MarvelCreators.creators.get({"limit": 24, "offset": counter, "firstNameStartsWith": MarvelCreators.letter}, function(creators) {
        MarvelCreators.values = MarvelCreators.values.concat(creators.data.results);
      });
    };

    // Multiple creators
    if($routeParams.id === undefined) {
      MarvelCreators.creators.get({"offset": 1, "limit": 24}, function(creators){
        MarvelCreators.values = creators.data.results;
      });
      $scope.creators = MarvelCreators;
    }
    // Single creator
    else {
      // Getting creator info
      MarvelCreators.creators.get({id: $routeParams.id}, function(creator) {
        controller.creator = creator.data.results[0];
      });
      // Getting creator' creators
      MarvelCreators.comicsByCreator.get({id: $routeParams.id}, function(comics) {
        controller.comics = comics.data.results;
      });
    }

  }]);
