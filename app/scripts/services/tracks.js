'use strict';

/**
 * @ngdoc service
 * @name streamItApp.Tracks
 * @description
 * # Tracks
 * Factory in the streamItApp.
 */
angular.module('streamItApp')
  .factory('Tracks', function ($resource) {

    // Public API here
    return $resource('http://urbanroll-api.herokuapp.com/api/tracks/:id', {id: '@_id'});

  });
