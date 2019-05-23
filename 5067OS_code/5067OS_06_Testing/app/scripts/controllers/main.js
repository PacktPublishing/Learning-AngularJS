'use strict';

angular.module('codeApp')
  .controller('MainCtrl', function ($scope) {
  })
  .controller('TodoController', function ($scope,$http,$q,api) {
  	$scope.todos = [];
    $scope.$on('update',function(){
      api.get().then( function( data ) {
        $scope.todos = data;
      } );
    })
  	$scope.$emit('update');
    $scope.add = function( text ) {
      var deferred = $q.defer();
      api.add( { text: text } ).then( function( data ) {
          deferred.resolve( data );
      } );
      return deferred.promise;
    }
  });
