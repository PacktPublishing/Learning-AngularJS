'use strict';

angular.module('jqueryApp')
  .controller('MainCtrl', function ($scope) {
  })
  .controller('DialogCtrl', function ($scope) {
  	$scope.shown = false;
  	$scope.launch = function() {
  		$scope.shown = true;
  	}
  	$scope.saving = function() {
  		alert('saving!');
  	}
  });
