'use strict';

angular.module('i18nApp')
  .controller('MainCtrl', function ($scope,$translate,language) {
	$translate.use(language);
  });
