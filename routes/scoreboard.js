var mongoose = require( 'mongoose'),
    User = mongoose.model('User'),
    moment = require( 'moment' );

exports.show_page = function( req, res ){

    User.find( { "started_at": {'$ne': null } }, 'user_id college score last_change_in started_at', { sort: { score: -1, last_change_in: 1 } }, function( error, users ){
        if( !error ) {
            if( users ) {
                users.forEach( function( e, i ){
                    e = e.toObject();
                    var duration = e.last_change_in != null ? e.last_change_in : 0;
                    duration = moment.duration( duration );
                    e.last_change_in = duration < 1 ? 'No submissions yet.' : get_formatted_duration( duration );
                    users[ i ] = e;
                } );
                return res.render( 'scoreboard', {
                    title: commons.quiz_name + ' | ScoreBoard',
                    users: users
                } );
            }
        }
        console.log( 'unexpected error occurred' );
    } );
};

function get_formatted_duration( duration ) {
    return add_leading_zero( duration.hours() ) + ':' + add_leading_zero( duration.minutes() ) + ':' + add_leading_zero( duration.seconds() );
}

function add_leading_zero( value ) {
    return value < 10 ? '0' + value : value;
}