
/*
 * GET home page.
 */

exports.show_page = function( req, res ){
    if( req.logged_in ) {
        return res.redirect( '/questions' );
    }
    res.render( 'index', {
        title: commons.quiz_name
    } );
};