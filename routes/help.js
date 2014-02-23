

exports.show_page = function( req, res ){
    res.render( 'help', {
        title: 'Welcome to ' + commons.quiz_name
    } );
};