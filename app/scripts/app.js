'use strict';

/**
 * @ngdoc overview
 * @name streamItApp
 * @description
 * # streamItApp
 *
 * Main module of the application.
 */
angular
  .module('streamItApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/track/:id', {
        templateUrl: 'views/trackdetails.html',
        controller: 'TrackdetailsCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
