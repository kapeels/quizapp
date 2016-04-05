var mongoose = require( 'mongoose'),
    Result = mongoose.model('Result'),
    Response = mongoose.model('Response');

function generate_result( user_id, res, callback ) {
    var score = 0, section_wise_score = [ 0, 0, 0 ];
    var analysis = {
        answered: 0,
        correct: 0,
        incorrect: 0
    };
    var section_wise_analysis = [ {
        answered: 0,
        correct: 0,
        incorrect: 0
    }, {
        answered: 0,
        correct: 0,
        incorrect: 0
    },{
        answered: 0,
        correct: 0,
        incorrect: 0
    } ];

    Response.find( { user_id: user_id }, function( error, responses ){
        for( var i = 0; i < responses.length; i++ ) {
            if( responses[ i ].response_type === 'answer' ) {
                var section_analysis = section_wise_analysis[ responses[ i ].question_section ];
                score += responses[ i ].score;
                section_wise_score[ responses[ i ].question_section ] += responses[ i ].score;
                section_analysis.answered++;
                analysis.answered++;
                if( responses[ i ].correct ) {
                    section_analysis.correct++;
                    analysis.correct++;
                }
                else {
                    section_analysis.incorrect++;
                    analysis.incorrect++;
                }
            }
        }
        var result_object = {
            user_id: user_id,
            score: score,
            section_wise_score: section_wise_score,
            analysis: analysis,
            section_wise_analysis: section_wise_analysis,
            created: Date.now( )
        };
        Result.create( result_object );
        callback( true, result_object, res );
    } );
}

function next_step( is_new, result, res ) {
 return res.render( 'result', {
                title: commons.quiz_name + ' | Result',
                sections: commons.quiz_sections,
                result: result
            } );
}

exports.show_page = function( req, res ){
    var user_id = req.session.u[ 0 ];
    Result.find( { user_id: user_id }, function( error, result ) {
        if( !error ) {
            if( result.length === 0 ) {
                generate_result( user_id, res, next_step );
            }
            else {
                next_step( false, result[ 0 ], res );
            }
            return;
        }
        console.log( 'unexpected error occurred' );
    } );
};
