'use strict';

angular.module('bootstrapApp')
  .controller('MainCtrl', function ($scope) {
    $scope.val = 'B';
    $scope.states = ['CA','NV','NJ','IA'];
    $scope.slides = ['pic1.jpg','pic2.jpg','pic3.jpg']
  });
