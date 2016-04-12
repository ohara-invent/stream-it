'use strict';

/**
 * @ngdoc function
 * @name streamItApp.controller:TrackdetailsCtrl
 * @description
 * # TrackdetailsCtrl
 * Controller of the streamItApp
 */
angular.module('streamItApp')
  .controller('TrackdetailsCtrl', function ($scope, Tracks, $routeParams) {

    $scope.track = Tracks.get({ 
      id: $routeParams.id
    }, function () {
      console.log($scope.track);
    });
    
  });
