'use strict';

/**
 * @ngdoc function
 * @name streamItApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the streamItApp
 */
angular.module('streamItApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
