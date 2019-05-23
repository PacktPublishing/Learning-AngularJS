angular.module('todo',[])
.factory('api',function( $http, $q ) {
	var self = {
		currentItem: null,
		get: function() {
			var deferred = $q.defer();
		  	$http.get('/api/v1/todo').success( function( data ) {
		  		deferred.resolve( data );
		  	} ).error( function( data ) {
		  		deferred.reject( data );
		  	} );
    		return deferred.promise;
		},
		getOne: function( id ) {
			var deferred = $q.defer();
		  	$http.get('/api/v1/todo/'+id).success( function( data ) {
		  		self.currentItem = data;
		  		deferred.resolve( data );
		  	} ).error( function( data ) {
		  		deferred.reject( data );
		  	} );
    		return deferred.promise;
		},
		add: function( obj ) {
			var deferred = $q.defer();
		  	$http.post('/api/v1/todo',JSON.stringify(obj)).success( function( data ) {
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
		update: function( id, obj ) {
			var deferred = $q.defer();
		  	$http.post('/api/v1/todo/'+id,JSON.stringify(obj)).success( function( data ) {
		  		deferred.resolve();
		  	} ).error( function( data ) {
		  		deferred.reject( data );
		  	} );
    		return deferred.promise;
		}
	};
	return self;
});
