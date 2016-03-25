
/**
 * Module dependencies.
 */

var express = require('express');
var MongoStore = require('connect-mongo')(express);
var http = require('http');
var mongoose = require('mongoose');
var path = require('path');
var fs = require('fs');

if ( fs.existsSync( './commons.local.js' ) ) {
    commons = require( './commons.local.js' );
}
else {
    commons = require( './commons.js' );
}

var db = require( './models/db.js' );

var index = require('./routes/index');
var user = require( './routes/user' );
var scoreboard = require( './routes/scoreboard' );
var help = require( './routes/help' );
var questions = require( './routes/questions' );

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.favicon());
//app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser(commons.cookie_secret));
app.use(express.session({
    cookie: { maxAge: 3600000 }, // 1 hour..
    //.. so that mongodb clears the session details one hour later if user doesn't log out
    secret: commons.cookie_secret,
    store: new MongoStore({
        mongoose_connection: mongoose.connection
        //url: commons.mongodb_uri + '/sessions'
    })
}));

app.use( function( req, res, next ) {

    // logged in user detection middleware
    if (typeof req.session.l == 'undefined') {
        req.logged_in = res.locals.logged_in = false;
    }
    else {
        req.logged_in = res.locals.logged_in = req.session.l;
    }

    // used for determining current path in EJS files
    res.locals.path = req.path;
    res.locals.menu = commons.menu;
    res.locals.is_remote = commons.quiz_mode == 'remote';

    res.locals.quiz_name = commons.quiz_name;
    res.locals.mega_event = commons.mega_event;
    res.locals.quiz_type = commons.quiz_type;
    res.locals.ends_in = (typeof req.session.sa == 'undefined' || !req.session.sa ) ? 0 : commons.get_quiz_end_time_relative( req.session.sa );
    res.locals.start_link = !req.session.sa ? '/start' : '/questions';

    // session persisted messages
    if( typeof req.session.alert !== 'undefined' ) {
        res.locals.alert = {
            type: req.session.alert.type,
            message: req.session.alert.message
        };
        delete req.session.alert;
    }

    next();
} );

app.use(app.router);

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get( '/', index.show_page );

if( commons.quiz_mode == 'local' ) {
    // if this is a local contest,
    // allow admin-only access to user management pages
    app.get( '/register', user.must_be_logged_in, user.must_be_admin, user.registration_page );
    app.get( '/forgot_password', user.must_be_logged_in, user.must_be_admin, user.forgot_password_page );
    app.post( '/register', user.must_be_logged_in, user.must_be_admin, user.registration_process );
    app.post( '/forgot_password', user.must_be_logged_in, user.must_be_admin, user.forgot_password_process );
}
else if( commons.quiz_mode == 'remote' ) {
    // if this is a remote contest,
    // allow unrestricted access to user registration pages
    app.get( '/register', user.registration_page );
    app.get( '/forgot_password', user.forgot_password_page );
    app.post( '/register', user.registration_process );
    app.post( '/forgot_password', user.forgot_password_process );
}


app.get( '/logout', user.logout_process );
app.post( '/login', user.login_process );

app.get( '/help', help.show_page );
app.get( '/questions', user.must_be_logged_in, questions.show_page );
app.get( '/scoreboard', user.must_be_logged_in, user.must_be_admin, scoreboard.show_page );

app.get( '/start', user.must_be_logged_in, questions.start_page );
app.post( '/start', user.must_be_logged_in, questions.start_quiz );
app.get( '/submit', user.must_be_logged_in, questions.exam_must_be_started, questions.exam_must_not_be_over, questions.stop_quiz );
//app.get( '/result', user.must_be_logged_in, questions.exam_must_be_over, result.show_page );

app.get( '/questions/:id', user.must_be_logged_in, questions.exam_must_be_started, questions.show_question );
app.post( '/answers/:id', user.must_be_logged_in, questions.exam_must_be_started, questions.exam_must_not_be_over, questions.validate_answer );

//app.get( '/reset_everything', user.must_be_logged_in, user.must_be_admin ,user.reset );

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
