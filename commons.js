var commons = {};

/**
 * wizard - 1st question to last question wizard-like interface
 * classic - dashboard with status for all the questions
 */
commons.quiz_type = 'classic';

/**
 * remote - email will be asked for...
 *          ..ideal for contests over the internet
 * local -  no email will not be asked for or dealt with..
 *          ..ideal for contests run in LAN with physical presence of participants
 */
commons.quiz_mode = 'remote';

commons.menu = [
    { label: 'Login', glyph: 'log-in', path: '/',
        show: { logged_in: false, logged_out: true, remote: true, local: true } },

    { label: 'Register', glyph: 'user', path: '/register',
        show: { logged_in: false, logged_out: true, remote: true, local: false } },

    { label: 'Forgot Password', glyph: 'info-sign', path: '/forgot_password',
        show: { logged_in: false, logged_out: true, remote: true, local: false } },

    { label: 'Play', glyph: 'play', path: '/start',
        show: { logged_in: true, logged_out: false, remote: true, local: true } },

    { label: 'Log Out', glyph: 'log-out', path: '/logout',
        show: { logged_in: true, logged_out: false, remote: true, local: true } },

    { label: 'Scoreboard', glyph: 'list-alt', path: '/scoreboard',
        show: { logged_in: true, logged_out: true, remote: true, local: true } },

    { label: 'Help', glyph: 'question-sign', path: '/help',
        show: { logged_in: true, logged_out: true, remote: true, local: true } }
];

commons.quiz_duration = 60; // in minutes
// year, month = 0 for jan and 11 for dec, day, hours, minutes, seconds
//commons.quiz_starts_at = new Date( 2015, 2 , 1, 13 ).getTime();
commons.quiz_starts_at = new Date( 2015, 1 , 26, 11 ).getTime();

commons.admin_user = 'CT1001';
commons.quiz_name = 'WebDig';
commons.quiz_prefix = 'CT';
commons.user_id_offset = 1000;
commons.mega_event = 'Catalyst';

commons.cookie_secret = '923jrd98ejfn93nf893jn89dn329dm2398d34bgn38denm39d';

commons.smtp_host = '';
commons.smtp_username = '';
commons.smtp_password = '';
commons.email_from_string = 'WebDig Team <web@catalystrgcer.in>';

commons.mongodb_uri = 'mongodb://root@localhost/webdig';
commons.should_send_email = commons.quiz_mode == 'remote';

commons.get_registration_email_text = function( name, user_id, password ) {
    return "Hi " + name +",\n\
\n\
Thank you for registering for WebDig 16.\n\
\n\
You can login with the following details:\n\
\n\
User ID: " + user_id + "\n\
Password : " + password + "\n\
URL: http://webdig.catalystrgcer.in/\n\
For more information, contact us on Facebook page: https://www.facebook.com/catalystRGCER \n\
\n\
Regards,\n\
Team WebDig.";

}

commons.get_forgot_password_email_text = function( name, user_id, password ) {
    return "Hi " + name +",\n\
\n\
You had just filled up the form to reset your password and receive it in your email.\n\
\n\
You can login with the following details:\n\
\n\
User ID: " + user_id + "\n\
Password : " + password + "\n\
URL: http://webdig.catalystrgcer.in/\n\
For more information, contact us on Facebook page: https://www.facebook.com/catalystRGCER \n\
\n\
Regards,\n\
Team WebDig.";
}

commons.flash_and_redirect = function( alert_type, alert_message, redirect_to, res, req ){
    req.session.alert = { type: alert_type, message: alert_message };
    return res.redirect( redirect_to );
}

commons.get_quiz_end_time = function( started_at ){
    return started_at != null ? new Date( started_at ).getTime() + ( commons.quiz_duration * 60000 ) : 0;
}

commons.get_quiz_end_time_relative = function( started_at ){
    return started_at != null ? ( new Date( started_at ).getTime() + ( commons.quiz_duration * 60000 ) - new Date().getTime() ) : 0;
}

commons.is_under_time_limit = function( started_at ) {
    var ends_at = commons.get_quiz_end_time( started_at );
    if( ends_at > new Date().getTime() ) {
        return true;
    }
    else {
        return false;
    }
}

module.exports = commons;
