var fs = require('fs');
var csv = require('csv');
var sleep = require( 'sleep' );
process.exit(0);
if ( fs.existsSync( '../commons.local.js' ) ) {
    commons = require( '../commons.local.js' );
}
else {
    commons = require( '../commons.js' );
}


var db = require( '../models/db.js' );
var _user = require('../routes/user');
var mongoose = require( 'mongoose' );
var    nodemailer = require( 'nodemailer');


// opts is optional
mongoose.connection.on( 'connected', function () {
    index = 0;
    csv()
        .from.stream(fs.createReadStream(__dirname+'/webdig_others.csv'))
        .transform( function(row){
            index++;
            console.log( 'attempting #' + index );
            _user.register_user( row[ 0 ], row[ 1 ], row[ 2 ], row[ 3 ], function( error, user ){
        if( error ) {
                    console.log( '#' + index + ': failed' );
        }
        else {
                                console.log( '#' + user.user_id + ': registered' );

                send_email( commons.quiz_name + " Registration", commons.get_registration_email_text( user.name, user.user_id, user.password ), user.email, function(resp){
                                        console.log( '#' + user.user_id + ': sent email' );

                } );
            
        }
    }, function(){ // on duplicate email error
                    console.log( '#' + row[3] + ': dupe email' );
        //return commons.flash_and_redirect( 'danger', 'A user with this email address already exists. Please click on "Forgot Password" link above if you cannot remember your password.', '/register', res, req );
    }, row[4] );

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

function send_email( subject, text, email, success ) {
    var smtpTransport = nodemailer.createTransport("SES",{
        AWSAccessKeyID: "AKIAJGFQHP6T7473LWQQ",
        AWSSecretKey: "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",
        ServiceUrl: "https://email.eu-west-1.amazonaws.com"
    });
    smtpTransport.sendMail( {
        from: 'WebDig Team <web@catalystrgcer.in>', // sender address
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
