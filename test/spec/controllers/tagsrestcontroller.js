'use strict';

describe('Controller: TagsrestcontrollerCtrl', function () {

  // load the controller's module
  beforeEach(module('angularBookmarkRestClientApp'));

  var TagsrestcontrollerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TagsrestcontrollerCtrl = $controller('TagsrestcontrollerCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
