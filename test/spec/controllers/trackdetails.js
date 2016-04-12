'use strict';

describe('Controller: TrackdetailsCtrl', function () {

  // load the controller's module
  beforeEach(module('streamItApp'));

  var TrackdetailsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TrackdetailsCtrl = $controller('TrackdetailsCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
