'use strict';

angular.module('MarvelApp')
  .factory('MarvelCreators', ['$resource', function($resource){
    var apikey  = '8ee35a566b7f8c8522e9a12db77fceec';
    return {
      letter: undefined,
      values: [],
      creators: $resource('https://gateway.marvel.com/v1/public/creators/:id', {'apikey': apikey} ),
      comicsByCreator : $resource('https://gateway.marvel.com/v1/public/creators/:id/comics', {'apikey': apikey} )
    };

  }]);
