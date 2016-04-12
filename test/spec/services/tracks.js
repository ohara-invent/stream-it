'use strict';

describe('Service: Tracks', function () {

  // load the service's module
  beforeEach(module('streamItApp'));

  // instantiate service
  var Tracks;
  beforeEach(inject(function (_Tracks_) {
    Tracks = _Tracks_;
  }));

  it('should do something', function () {
    expect(!!Tracks).toBe(true);
  });

});
