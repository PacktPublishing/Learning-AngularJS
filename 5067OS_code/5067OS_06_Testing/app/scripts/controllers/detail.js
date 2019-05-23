'use strict';

angular.module('codeApp')
  .controller('DetailCtrl', function ($scope,$routeParams,api) {
    $scope.id = $routeParams.id;
  })
  .controller('DetailInfoCtrl', function ($scope,api) {
    $scope.item = {};
    $scope.$watch( 'id', function() {
    	api.getOne( $scope.id ).then( function( data ) {
	    	$scope.item = data;
    	} );
    } );
    $scope.save = function() {
    	api.update( $scope.item.id, $scope.item ).then( function() {
    		window.location.href = "#";
    	} );
    }
  });
