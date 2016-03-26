// Bring Mongoose into the app
var mongoose = require( 'mongoose' );
// Create the database connection
mongoose.connect( commons.mongodb_uri );

// CONNECTION EVENTS
// When successfully connected
mongoose.connection.on( 'connected', function () {
    console.log( 'Mongoose default connection open to ' + commons.mongodb_uri  );
});

// If the connection throws an error
mongoose.connection.on( 'error', function (err) {
    console.log( 'Mongoose default connection error: ' + err );
});

// When the connection is disconnected
mongoose.connection.on( 'disconnected', function () {
    console.log( 'Mongoose default connection disconnected' );
});

// If the Node process ends, close the Mongoose connection
process.on( 'SIGINT', function() {
    mongoose.connection.close(function () {
        console.log( 'Mongoose default connection disconnected through app termination' );
        process.exit( 0 );
    });
});

require( './user' );
require( './response' );
require( './result' );