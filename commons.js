var commons = {};

/**
 * wizard - 1st question to last question wizard-like interface
 * classic - dashboard with status for all the questions
 */
commons.quiz_type = 'wizard';

/**
 * remote - email will be asked for...
 *          ..ideal for contests over the internet
 * local -  no email will not be asked for or dealt with..
 *          ..ideal for contests run in LAN with physical presence of participants
 */
commons.quiz_mode = 'local';

commons.menu = [
    { label: 'Login', glyph: 'log-in', path: '/',
        show: { logged_in: false, logged_out: true, remote: true, local: true } },

    { label: 'Register', glyph: 'user', path: '/register',
        show: { logged_in: false, logged_out: true, remote: true, local: false } },

    { label: 'Forgot Password', glyph: 'info-sign', path: '/forgot_password',
        show: { logged_in: false, logged_out: true, remote: true, local: false } },

    { label: 'Questions', glyph: 'list-alt', path: '/questions',
        show: { logged_in: true, logged_out: false, remote: true, local: true } },

    { label: 'Start Exam', glyph: 'play', path: '/start',
        show: { logged_in: true, logged_out: false, remote: true, local: true } },

    { label: 'Submit Exam', glyph: 'stop', path: '/submit',
        show: { logged_in: true, logged_out: false, remote: true, local: true } },

    { label: 'Log Out', glyph: 'log-out', path: '/logout',
        show: { logged_in: true, logged_out: false, remote: true, local: true } },

    { label: 'Scoreboard', glyph: 'list-alt', path: '/scoreboard',
        show: { logged_in: true, logged_out: true, remote: true, local: false } },

    { label: 'Help', glyph: 'question-sign', path: '/help',
        show: { logged_in: true, logged_out: true, remote: true, local: false } }
];

commons.quiz_duration = 30; // in minutes
// year, month = 0 for jan and 11 for dec, day, hours, minutes, seconds
commons.quiz_starts_at = new Date( 2015, 2 , 12, 11, 0 ).getTime();
//commons.quiz_starts_at = new Date( 2015, 1 , 26, 10, 30 ).getTime();

commons.admin_user = 'QZ9001';
commons.quiz_name = 'MH-CET Mock Exam';
commons.quiz_prefix = 'QZ';
commons.user_id_offset = 5000;
commons.mega_event = 'RGCER';

commons.cookie_secret = '1293i1290349j65ds1g65df1g65fddfm9dsmf9sdmf92md9';

commons.smtp_host = '';
commons.smtp_username = '';
commons.smtp_password = '';
commons.email_from_string = '';

commons.mongodb_uri = 'mongodb://root@localhost/quizapp-rgcer';
commons.should_send_email = commons.quiz_mode == 'remote';

commons.quiz_sections = [
  { name: 'Physics' },
  { name: 'Chemistry' },
  { name: 'Mathematics' }
];

commons.get_registration_email_text = function( name, user_id, password ) {
    return "Hi " + name +",\n\
\n\
Thank you for registering for QuizApp.\n\
\n\
You can login with the following details:\n\
\n\
User ID: " + user_id + "\n\
Password : " + password + "\n\
\n\
For more information, contact us at:\n\
\n\
John Doe: +1-800-800\n\
\n\
Regards,\n\
QuizApp Team.";

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
For more information, contact us at:\n\
\n\
John Doe: +1-800-800\n\
\n\
Regards,\n\
QuizApp Team.";
}

commons.flash_and_redirect = function( alert_type, alert_message, redirect_to, res, req ){
    req.session.alert = { type: alert_type, message: alert_message };
    return res.redirect( redirect_to );
}

commons.get_quiz_end_time = function( started_at ){
    return started_at != null ? new Date( started_at ).getTime() + ( commons.quiz_duration * 60000 ) : 0;
}

commons.get_quiz_end_time_relative = function( started_at ){
    return started_at !== null ? ( new Date( started_at ).getTime() + ( commons.quiz_duration * 60000 ) - new Date().getTime() ) : 0;
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

commons.shuffle = function shuffle(array) {
    var currentIndex = array.length
        , temporaryValue
        , randomIndex
        ;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}


module.exports = commons;
