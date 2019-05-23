'use strict';

angular
  .module('i18nApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'pascalprecht.translate'
  ])
  .value('language','de')
  .config(function($translateProvider) {
    $translateProvider.translations('en', {
      HI_EVERYBODY: 'Hi Everybody!'
    });
    $translateProvider.translations('de', {
      HI_EVERYBODY: 'Guten Tag!'
    });
  })
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
