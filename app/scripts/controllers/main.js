'use strict';

/**
 * @ngdoc function
 * @name streamItApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the streamItApp
 */
angular.module('streamItApp')
  .controller('MainCtrl', function ($scope, Tracks, $sce) {

    $scope.tracksPerPage = 13;
    $scope.skip = 0;

    $scope.trustSrc = trustSrc;
    $scope.getPreviousTracks = getPreviousTracks;
    $scope.getNextTracks = getNextTracks;

    getTracks();


    function getPreviousTracks() {
      $scope.skip -= $scope.tracksPerPage;
      getTracks();
    }

    function getNextTracks() {
      $scope.skip += $scope.tracksPerPage;
      getTracks();
    }

    function getTracks() {
      $scope.tracks = Tracks.query({
        sort: '-createdAt',
        limit: $scope.tracksPerPage,
        skip: $scope.skip
      }, function() {
        console.log($scope.tracsk)
      });
    }

    function trustSrc(src) {
      return $sce.trustAsResourceUrl(src);
    }

  });
