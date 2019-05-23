'use strict';

angular.module('codeApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'ngAnimate',
  'todo'
])
  .run(function($rootScope){
    $rootScope.$on('$routeChangeSuccess',function( data ){
      console.log('routeChangeSuccess');
      console.log(data);
    });
    $rootScope.$on('$routeChangeError',function( data ){
      console.log('routeChangeError');
      console.log(data);
    });
    $rootScope.$on('$routeUpdate',function( data ){
      console.log('routeUpdate');
      console.log(data);
    });
    $rootScope.$on('$viewContentLoaded',function( data ){
      console.log('viewContentLoaded');
      console.log(data);
    });
  })
  .controller('TopCtrl', function ($scope) {
    // $scope.$on('$routeChangeSuccess',function( data ){
    //   console.log('routeChangeSuccess');
    //   console.log(data);
    // });
    // $scope.$on('$routeChangeError',function( data ){
    //   console.log('routeChangeError');
    //   console.log(data);
    // });
    // $scope.$on('$routeUpdate',function( data ){
    //   console.log('routeUpdate');
    //   console.log(data);
    // });
    // $scope.$on('$viewContentLoaded',function( data ){
    //   console.log('viewContentLoaded');
    //   console.log(data);
    // });
  })
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/:id', {
        templateUrl: 'views/detail.html',
        controller: 'DetailCtrl',
        resolve: {
          id: function( $route, api ) {
            return api.getOne( $route.current.params.id );
          }
        }
      })
      .otherwise({
        redirectTo: '/'
      });
  });
