var fs = require('fs');
var csv = require('csv');
var sleep = require( 'sleep' );

if ( fs.existsSync( '../commons.local.js' ) ) {
    commons = require( '../commons.local.js' );
}
else {
    commons = require( '../commons.js' );
}


var db = require( '../models/db.js' );
var user = require('../routes/user');
var mongoose = require( 'mongoose' );

// opts is optional
mongoose.connection.on( 'connected', function () {
    index = 0;
    csv()
        .from.stream(fs.createReadStream(__dirname+'/csv/users.csv'))
        .transform( function(row){
            index++;
            console.log( 'attempting #' + index );
            user.register_user( row[ 0 ], row[ 1 ], row[ 2 ], row[ 3 ], function( error, user ){
                if( error ) {
                    console.log( '#' + index + ': failed' );
                }
                else if( user ) {
                    console.log( '#' + user.user_id + ': registered' );
                }
                else {
                    console.log( '#' + index + ': wat' );
                }
            }, null, row[ 5 ] ,row[ 4 ] );

            //row.unshift(row.pop());
            return row;
        })
        .on('record', function(row,index){
            //sleep.sleep( 1 );
          //  console.log('#'+index,row);
        })
        .on('end', function(count){
            console.log('Number of lines processed: '+count);
        })
        .on('error', function(error){
            console.log(error.message);
        });});
