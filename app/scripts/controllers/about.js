'use strict';

/**
 * @ngdoc function
 * @name streamItApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the streamItApp
 */
angular.module('streamItApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
