'use strict';

angular.module('codeApp')
  .controller('MainCtrl', function ($scope) {
  })
  .controller('TodoController', function ($scope,$resource) {
    var Task = $resource('/api/v1/todo/:taskId', {taskId:'@id'});
  	$scope.todos = [];
  	$scope.update = function() {
      Task.query(function(todos){
        $scope.todos = todos;
      });
  	}
  	$scope.update();

  	$scope.new_todo = '';
  	$scope.add = function( event ) {
  		if( event.keyCode == 13 ) {
        var t = new Task({text:$scope.new_todo});
        t.$save(function(){
          $scope.update();
          $scope.new_todo = '';
        });
  		}
  	}

  	$scope.done = function( todo ) {
      todo.$delete(function(){
        $scope.update();
      });
  	}

  	$scope.save = function( event, todo ) {
  		if( event.keyCode == 13 ) {
        todo.$save();
  		}
  	}
  });
