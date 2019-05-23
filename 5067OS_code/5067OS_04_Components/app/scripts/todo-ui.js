angular.module('todo')
.directive('todo',function( api ){
	return {
		scope: {
			item: '=todo'
		},
		template: '<button ng-click="done(item.id)" class="btn btn-xs btn-danger">Done</button><input type="text" ng-model="item.text" ng-keyup="save($event,item)">',
		link: function (scope, element) {
		  	scope.done = function( id ) {
		      api.delete( id ).then( function() {
		      	scope.$emit('update');
		  	  }, function( reason ) {
		        console.log( reason );
		      });
		  	}
		  	scope.save = function( event, todo ) {
		  		if( event.keyCode == 13 ) {
			        api.update( todo.id, todo.text ).then( function() {
			      		scope.$emit('update');
				  	} );
		  		}
		  	}
      	}
	};
})
.directive('newtodo',function( api ){
	return {
		restrict: 'E',
		scope: {
			size: '@?'
		},
		template: '<input type="text" ng-model="new_todo" ng-keyup="add($event)" style="font-size:{{size}};">',
		link: function (scope, element) {
		  	scope.size = scope.size || 'normal';
		  	scope.new_todo = '';
		  	scope.add = function( event ) {
		  		if( event.keyCode == 13 ) {
			        api.add( scope.new_todo ).then( function() {
			          scope.$emit('update');
					  scope.new_todo = '';
				  	} );
		  		}
		  	}
      	}
	};
});

