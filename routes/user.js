/**
 * GET /register show_form
 */
var mongoose = require( 'mongoose'),
    User = mongoose.model('User'),
    validator = require( 'validator'),
    nodemailer = require( 'nodemailer');

exports.must_be_logged_in = function( req, res, next ) {
    if( req.logged_in ) {
        return next();
    }
    else {
        console.log( 'Restricted page access attempted' );
        return commons.flash_and_redirect( 'danger', 'You should be logged in to access that page.', '/', res, req );
    }
};

exports.registration_page = function( req, res ) {
    res.render( 'register', {
        title: commons.quiz_name + ' | Register',
        enable_email: commons.should_send_email
    } );
};

exports.login_process = function( req, res ) {
    var user_id = validator.trim( req.body.user_id ).toUpperCase();
    if( validator.isNull( user_id ) || !validator.isAlphanumeric( user_id ) || user_id == "" || !validator.isLength( user_id, 6, 6 ) ) {
        console.log( 'invalid user id:' + user_id );
        return commons.flash_and_redirect( 'danger', 'Invalid ' + commons.mega_event +' ID entered. Please try again.', '/', res, req );
    }

    var password = validator.trim( req.body.password );
    if( !validator.isNumeric( password ) || !validator.isLength( password, 6, 6 ) ) {
        console.log( 'invalid user password:' + password );
        return commons.flash_and_redirect( 'danger', 'Incorrect password entered. Please try again.', '/', res, req );
    }

    User.findOne( { user_id: user_id }, function( error, user ){
        if( error ) {
            console.log( 'unexpected error occurred' );
            return commons.flash_and_redirect( 'warning', 'Unexpected error occurred. Please try again later.', '/', res, req );

        }
        else if( !user ) {
            console.log( 'couldnt find user' );
            return commons.flash_and_redirect( 'danger', 'Invalid ' + commons.mega_event +' ID entered. Please try again.', '/', res, req );
        }
        else {
            if( user.password == password ) {
                if( !user.active ) {
                    console.log( 'inactive user login attempt' );
                    return commons.flash_and_redirect( 'danger', 'You have been banned from the contest. Please do not attempt signing in.', '/', res, req );
                }
                console.log( user_id + ' logged in successfully' );
                req.session.l = true;
                req.session.u = new Array( user.user_id, user.name, user.score );
                req.session.c = Math.round( new Date().getTime() / 1000 );
                req.session.ls = user.last_submission;
                req.session.sa = user.started_at;
                return commons.flash_and_redirect( 'success', 'You have been logged in successfully.', user.started_at == null ? '/start' : '/questions', res, req );
            }
            else {
                console.log( 'incorrect password' );
                return commons.flash_and_redirect( 'danger', 'Incorrect password entered. Please try again.', '/', res, req );
            }
        }
    } );
}

exports.logout_process = function( req, res ) {
    if( req.logged_in ) {
        req.session.l = false;
        req.session.c = req.session.u = null;
        req.logged_in = false;
        //delete req.session.l, req.session.c, res.session.u;
    }
    return commons.flash_and_redirect( 'warning', 'You have been logged out successfully!', '/', res, req );
}

exports.registration_process = function( req, res ) {

    var name = validator.trim( req.body.name),
        college = validator.trim( req.body.college),
        phone = validator.trim( req.body.phone),
        email = commons.should_send_email ? validator.trim( req.body.email ) : 'okay@okay.ok';

    if( !name || !college || !phone || !email ) {
        console.log( 'one of the field left empty' );
        return commons.flash_and_redirect( 'danger', 'One of the field was left empty. Please try again.', '/register', res, req );
    }

    if( !validator.isEmail( email ) ) {
        console.log( 'invalid email entered' );
        return commons.flash_and_redirect( 'danger', 'The email you have entered is invalid. Please try entering another email address.', '/register', res, req );
    }

    return exports.register_user( name, college, phone, email, function( error, user ){
        if( error ) {
            console.log( 'cannot insert user to database.' );
            return commons.flash_and_redirect( 'warning', 'Unexpected error occurred. Please try again later.', '/register', res, req );
        }
        else {
            if( commons.should_send_email ) {
                send_email( commons.quiz_name + " Registration", commons.get_registration_email_text( name, user.user_id, user.password ), email, function(resp){
                    req.session.l = true;
                    req.session.u = new Array( user.user_id, name, 0 );
                    req.session.c = Math.round( new Date().getTime() / 1000 );
                    req.session.ls = null;
                    req.session.sa = null;
                    return commons.flash_and_redirect( 'success', 'You have been registered successfully. We have sent you an email with your login details. Your login details: <br /><br /><b>Catalyst ID: ' + user.user_id + '<br /> Password: ' + user.password + '</b>', '/start', res, req );    
                } );
            }
            else {
                return commons.flash_and_redirect( 'success', 'User registered successfully.<br />User ID: ' + user.user_id + '<br /> Password: ' + user.password, '/register', res, req );
            }
        }
    }, function(){ // on duplicate email error
        console.log( 'email already exists' );
        return commons.flash_and_redirect( 'danger', 'A user with this email address already exists. Please click on "Forgot Password" link above if you cannot remember your password.', '/register', res, req );
    });
}

exports.register_user = function( name, college, phone, email, callback, email_error, user_id_, password_ ) {
    User.findOne( { email: email }, function( error, user ){
        if( ( commons.should_send_email && !user ) || !commons.should_send_email ) {
            User.findOne(
                {},
                null,
                { sort: { user_id: -1 } },
                function( error, lastUser ) {
                    if( !lastUser ) {
                        lastUser = { user_id: commons.quiz_prefix + commons.user_id_offset };
                    }

                    var user_id;
                    if( user_id_ ) {
                        user_id = user_id_;
                    }
                    else {
                        user_id = parseInt( lastUser.user_id.slice( 2 ) );
                        user_id = commons.quiz_prefix + (++user_id);
                    }

                    console.log( 'attempting registration for user_id' + user_id );
                    var password = password_ ? password_ : generate_password( 99999, 1000000 );
                    User.create({
                        user_id: user_id,
                        password: password,
                        name: name,
                        phone: phone,
                        email: email,
                        college: college,
                        created: Date.now(),
                        active: true,
                        score: 0,
                        last_submission: null,
                        started_at: null
                    }, callback);
                }
            );
        }
        else {
            email_error();
        }
    } );

}

exports.forgot_password_page = function( req, res ) {
    res.render( 'forgot_password', {
        title: commons.quiz_name + ' | Forgot Password'
    } );
}

exports.forgot_password_process = function( req, res ) {
    var email = validator.trim( req.body.email );

    if( commons.should_send_email ) {
        var criteria = { email: email };
    }
    else {
        var criteria = { user_id: email.toUpperCase() };
    }

    if( (!email || !validator.isEmail( email )) && commons.should_send_email ) {
        console.log( 'invalid email entered' );
        return commons.flash_and_redirect( 'danger', 'You have entered an invalid email address. Please try again.', '/forgot_password', res, req );
    }

    User.findOne( criteria, function( error, user ){
        if( error || user == null ) {
            console.log( 'user does not exist or unexpected error occurred' );
            return commons.flash_and_redirect( 'warning', 'No ' + commons.mega_event +' ID associated with the email you provided was found. Please try again.', '/forgot_password', res, req );
        }
        else {
            if( commons.should_send_email ) {
                send_email( commons.quiz_name + " login details", commons.get_forgot_password_email_text( user.name, user.user_id, user.password ), email, function(){
                    return commons.flash_and_redirect( 'success', 'Your ' + commons.mega_event +' ID and password have been sent to your email address.', '/', res, req );
                } );    
            }
            else {
                return commons.flash_and_redirect( 'success', 'Your ' + commons.mega_event +' ID is <strong>' + user.user_id +'</strong> and password is <strong>' + user.password + '</strong>.', '/forgot_password', res, req );
            }
        }
    } )
}

exports.reset = function( req, res ) {
    // reset all users to have initial state
    User.update( null, { score: 0, started_at: null, last_submission: null, last_change_in: 0 }, { multi: true } ).exec();
    // delete everything from the response table
    var Response = mongoose.model( 'Response' );
    Response.remove( null ).exec();
    // delete all the sessions
    mongoose.connection.db.dropCollection( 'sessions' );
    exports.logout_process( req, res );
    //return res.send( 'done' );
}

exports.must_be_admin = function( req, res, next ) {
    if( req.session.u[ 0 ] == commons.admin_user ) {
        console.log( 'admin action just happened!' );
        return next();
    }
    else {
        console.log( req.session.u[ 0 ] );
        return res.send( 'y u no admin?' );
    }
}

function generate_password( min, max ) {
    return  Math.floor( Math.random() * (max - min) + min );
}

function send_email( subject, text, email, success ) {
    var smtpTransport = nodemailer.createTransport("SES",{
        AWSAccessKeyID: "AKIAJGFQHP6T7473LWQQ",
        AWSSecretKey: "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",
        ServiceUrl: "https://email.eu-west-1.amazonaws.com"
    });
    smtpTransport.sendMail( {
        from: commons.email_from_string, // sender address
        to: email,
        subject: subject,
        text: text
    },function( error, response ){
        if( error ) {
            console.log ( 'email sending failed', error );
        }
        else {
            console.log( 'email sent successfully' );
        }
        success();
    } );
}