'use strict';

angular.module('MarvelApp')
  .controller('ComicController', ['$scope', '$location', '$routeParams','MarvelComics',  function($scope, $location, $routeParams, MarvelComics){
    var controller = this;
    var counter = 5;

    $scope.loadMore = function(){
      counter += 24;
      MarvelComics.comics.get({"limit": 24, "offset": counter, "titleStartsWith": MarvelComics.letter}, function(comics) {
        MarvelComics.values = MarvelComics.values.concat(comics.data.results);
        console.log("HEY HEY HEY: ", MarvelComics.values);
      });
    };

    // Multiple comics
    if($routeParams.id === undefined) {
      MarvelComics.comics.get({"limit": 24}, function(comics){
        MarvelComics.values = comics.data.results;
      });
      $scope.comics = MarvelComics;
    }
    // Single comic
    else {
      // Getting comic info
      MarvelComics.comics.get({id: $routeParams.id}, function(comic) {
        controller.comic = comic.data.results[0];
      });
      // Getting comic' creators
      MarvelComics.creatorsByComic.get({id: $routeParams.id}, function(creators) {
        controller.creators = creators.data.results;
      });
    }

  }]);
