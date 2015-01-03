'use strict';

describe('Controller: RestcontrollerCtrl', function () {

  // load the controller's module
  beforeEach(module('angularBookmarkRestClientApp'));

  var RestcontrollerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RestcontrollerCtrl = $controller('RestcontrollerCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
