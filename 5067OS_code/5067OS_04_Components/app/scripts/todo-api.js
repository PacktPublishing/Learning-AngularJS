angular.module('todo',[])
.factory('api',function( $http, $q ) {
	return {
		get: function() {
			var deferred = $q.defer();
		  	$http.get('/api/v1/todo').success( function( data ) {
		  		deferred.resolve( data );
		  	} ).error( function( data ) {
		  		deferred.reject( data );
		  	} );
    		return deferred.promise;
		},
		add: function( text ) {
			var deferred = $q.defer();
		  	$http.post('/api/v1/todo',text).success( function( data ) {
		  		deferred.resolve();
		  	} ).error( function( data ) {
		  		deferred.reject( data );
		  	} );
    		return deferred.promise;
		},
		delete: function( id ) {
			var deferred = $q.defer();
	  		$http.delete('/api/v1/todo/'+id).success( function( data ) {
		  		deferred.resolve();
	  		} ).error( function( data ) {
		  		deferred.reject( data );
		  	} );
    		return deferred.promise;
		},
		update: function( id, text ) {
			var deferred = $q.defer();
		  	$http.post('/api/v1/todo/'+id,text).success( function( data ) {
		  		deferred.resolve();
		  	} ).error( function( data ) {
		  		deferred.reject( data );
		  	} );
    		return deferred.promise;
		}
	};
});
