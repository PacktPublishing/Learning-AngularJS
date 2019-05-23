'use strict';

angular.module('d3App')
  .controller('MainCtrl', function ($scope) {
  })
  .controller('SpeedController', function( $scope ) {
  	$scope.speed = 50;
  	$scope.miles = 10000;
  	$scope.change = function() {
  		console.log( 1 );
  		$scope.speed = ( Math.random() * 100 ) + 30;
  		$scope.miles += Math.random() * 100;
  	}
  } );
