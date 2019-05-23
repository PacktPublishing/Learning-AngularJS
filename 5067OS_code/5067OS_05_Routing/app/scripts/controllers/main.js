'use strict';

angular.module('codeApp')
  .controller('MainCtrl', function ($scope,$rootScope) {
  })
  .controller('TodoController', function ($scope,$http,api) {
  	$scope.todos = [];
    $scope.$on('update',function(){
      api.get().then( function( data ) {
        $scope.todos = data;
      } );
    })
  	$scope.$emit('update');
  });
