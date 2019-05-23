'use strict';

angular.module('jqueryApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .directive('spinner',function( $rootScope ){
    return {
      restrict: 'A',
      scope: {
        value: '='
      },
      link: function( scope, element ) {
        scope.elem = $(element[0]);
        scope.elem.spinner({
          spin: function( event, ui ) {
             scope.value = ui.value;
             $rootScope.$digest();
          }
        });
        scope.$watch( 'value', function() {
          scope.elem.spinner( 'value', scope.value );
        });
      }
    }
  });
