'use strict';

angular.module('codeApp')
  .controller('DetailCtrl', function ($scope,api) {
  })
  .controller('DetailInfoCtrl', function ($scope,api) {
    $scope.item = api.currentItem;
    $scope.save = function() {
    	api.update( $scope.item.id, $scope.item ).then( function() {
    		window.location.href = "#";
    	} );
    }
  });
