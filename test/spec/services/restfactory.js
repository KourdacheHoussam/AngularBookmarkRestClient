'use strict';

describe('Service: RestFactory', function () {

  // load the service's module
  beforeEach(module('angularBookmarkRestClientApp'));

  // instantiate service
  var RestFactory;
  beforeEach(inject(function (_RestFactory_) {
    RestFactory = _RestFactory_;
  }));

  it('should do something', function () {
    expect(!!RestFactory).toBe(true);
  });

});
