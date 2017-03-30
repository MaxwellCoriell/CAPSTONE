'use strict';

angular.module('MarvelApp')
  .factory('MarvelComics', ['$resource', function($resource){
    var apikey  = '8ee35a566b7f8c8522e9a12db77fceec';

    return {
      letter : undefined,
      values : [], // sharing data between controllers
      comics : $resource('http://gateway.marvel.com/v1/public/comics/:id', {'apikey': apikey} ),
      creatorsByComic : $resource('http://gateway.marvel.com/v1/public/comics/:id/creators', {'apikey': apikey} )
    };
}]);
