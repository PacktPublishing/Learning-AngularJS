'use strict';

angular.module('jqueryApp', [])
.directive('dialog', function(){
  	return {
  		restrict: 'E',
  		scope: {
  			title: '@?',
  			visible: '=',
  			onSave: '&?'
  		},
  		templateUrl: 'dialog.html',
  		transclude: true,
  		link: function( scope, element ) {
  			scope.dlgElement = $('.modal',element);

  			scope.title = scope.title || 'I need a title';
  			scope.visible = scope.visible || false;
  			scope.onSave = scope.onSave || function() {};

  			scope.$watch( 'visible', function( nv, ov ) {
  				if ( nv != ov ) {
  					if ( nv == true ) {
  						scope.dlgElement.modal('show');
  					}
  					if ( nv == false ) {
  						scope.dlgElement.modal('hide');
  					}
  				}
  			} );

  			scope.close = function() {
  				scope.visible = false;
  			}

  			scope.save = function() {
  				scope.visible = false;
  				scope.onSave();
  			}
  		}
  	}
  });
