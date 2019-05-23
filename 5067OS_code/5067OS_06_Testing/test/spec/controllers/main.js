'use strict';

describe('Controller: TodoController', function () {

  // load the controller's module
  beforeEach(module('codeApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('TodoController', {
      $scope: scope
    });
  }));

  it('should have some todos', function () {
    expect(scope.todos.length).toBe(0);
  });

  it('should add a todo', function () {
    expect(scope.todos.length).toBe(0);
    scope.add({text:'foo'}).then( function() {
      expect(scope.todos.length).toBe(1);
    });
  });
});
