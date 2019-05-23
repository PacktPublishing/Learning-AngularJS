module.exports = function (connect, options) {
  var items = [];
  var item_id = 0;
  var find_index_by_id = function( id ) {
    for( var i in items ) {
      if ( items[i].id == id ) return i;
    }
    return -1;
  }
  var find_by_id = function( id ) {
    var i = find_index_by_id( id );
    return i != -1 ? items[ i ] : null;
  }
  var middlewares = [
    connect().use('/api/v1/todo', function(req, res, next) {
      res.setHeader('Content-Type', 'application/json');

      var id = null;
      if ( req.url.match( /\/\d+/ ) != null ) {
        id = parseInt( req.url.replace("/","") );
      }

      if ( req.method == 'GET' ) {
        if ( id != null ) {
          var item = find_by_id( id );
          if ( item != null ) {
            res.end( JSON.stringify( item ) );
          } else {
            res.statusCode = 400;
            res.end( JSON.stringify( { ok: false, error: "Invalid ID" } ) );
          }
        } else {
          res.end( JSON.stringify( items ) );
        }
      }
      if ( req.method == 'POST' ) {
        var body = '';
        req.on('data', function (data) { body += data; });
        req.on('end', function () {
          if ( id != null ) {
            var item = find_by_id( id );
            if ( item != null ) {
              item.text = JSON.parse(body).text;
              res.end( JSON.stringify( item ) );
            } else {
              res.statusCode = 400;
              res.end( JSON.stringify( { ok: false, error: "Invalid ID" } ) );
            }
          }
          else {
            item_id++;
            var obj = JSON.parse( body );
            obj.id = item_id;
            items.push( obj );
            res.end( JSON.stringify( obj ) );
          }
        });
      }
      if ( req.method == 'DELETE' ) {
        if ( id != null ) {
          var ind = find_index_by_id( id );
          if ( ind != -1 ) {
            items.splice( ind, 1 );
            res.end( JSON.stringify( { ok: true } ) );
          } else {
            res.statusCode = 400;
            res.end( JSON.stringify( { ok: false } ) );
          }
        } else {
          res.statusCode = 400;
          res.end( JSON.stringify( { ok: false } ) );
        }
      }
    })
  ];
  options.base.forEach(function (base) {
    middlewares.push(connect.static(base));
  });
  return middlewares;
};