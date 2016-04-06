
var questions = require( '../models/questions.js' ),
    mongoose = require( 'mongoose'),
    Response = mongoose.model('Response'),
    Result = mongoose.model( 'Result' ),
    User = mongoose.model( 'User' ),
    validator = require( 'validator'),
    moment = require( 'moment' );

var _ = require( 'lodash' );

var qid_max = questions.length - 1,
    qid_min = 0;

exports.show_page = function( req, res ){
    Response.find( { user_id: req.session.u[ 0 ] }, null, { sort: { created: 1 } }, function( error, responses ){
        if( !error ) {
            var questions_status = get_empty_question_status( req.session.question_sheet );

            if( responses ) {
                responses.forEach( function( e, i, a ) {
                    var status = 1;
                    if( e.response_type === 'answer' && !!e.response ) {
                        status = 0;
                        if( e.mfr_value === true ) {
                            status = 2;
                        }
                    }
                    else if( e.mfr_value === true ) {
                        status = 3;
                    }

                    questions_status[ e.displayed_question_no ][ 'status' ] = status;
                } );
            }
            var can_solve = true;
            if( !!req.session.sa ) {
                if( !commons.is_under_time_limit( req.session.sa ) ) {
                    can_solve = false;
                }
            }
            res.render( 'questions', {
                title: commons.quiz_name + ' | Play!',
                sections: commons.quiz_sections,
                questions: questions_status,
                can_solve: can_solve
            } );
        }
        else {
            console.log( 'unexpected error occurred' );
            return;
        }
    } );
};

exports.show_question = function( req, res ) {
    var question_id = parseInt( req.params.id );

    if( !question_id || question_id < qid_min + 1 || question_id > qid_max + 1 ) {
        // console.log( "Invalid question requested" );
        return commons.flash_and_redirect( 'danger', 'Question not found.', '/questions', res, req );
    }

    var question = questions[ req.session.question_sheet[ question_id - 1 ] ];

    var actual_question_id = question.question_no - 1;

    Response.find(
        { user_id: req.session.u[ 0 ], question_no: actual_question_id },
        null,
        { sort: { created: 1 } },
        function( error, responses ){
            if( !error ) {
                var has_answered = false, answer_allowed = true;
                var mfr_value = false, selected_option = -1;
                var response_type, display_answer = false;

                if( !commons.is_under_time_limit( req.session.sa ) ||
                    req.session.is_completed === true
                 ) {
                    answer_allowed = false;
                    display_answer = true;
                }

                if( responses.length > 0 ) {
                    responses.forEach( function( e ){
                        response_type = e.response_type;
                        if( e.mfr_value ) {
                          mfr_value = true;
                        }
                        if( e.response_type === 'answer' ) {
                            if( !!e.response ) {
                                has_answered = true;
                            }
                            if( question.type == '2' ) { // is MCQ
                                selected_option = parseInt( e.response );
                            }
                        }
                    } );
                }

                var answer = '<span class="text-danger">Incorrect</span>';
                if( question.answer === selected_option ) {
                    answer = '<span class="text-success">Correct</span>';
                }

                for( var l = 0; l < question.choice.length; l++ ) {
                    // set the correct answer in the choice
                    if( question.choice[ l ].value === question.answer ) {
                       question.choice[ l ][ 'correct' ] = true;
                    }
                    else {
                       question.choice[ l ][ 'correct' ] = false;
                    }

                    // set the selected answer in the choice
                    if( selected_option === question.choice[ l ].value ) {
                        question.choice[ l ][ 'selected' ] = true;
                    }
                    else {
                        question.choice[ l ][ 'selected' ] = false;
                    }
                }

                // shuffle answers if mcq!
                if( question.type == '2' && question.section != 2 ) {
                    question.choice = shuffle( question.choice );
                }
                return res.render( 'question_page',{
                    path: '/questions',
                    title: commons.quiz_name + ' | Question ' + question_id,
                    question_id: question_id,
                    qid_max: qid_max,
                    qid_min: qid_min,
                    question: question,
                    section: commons.quiz_sections[ question.section ].name,
                    answer_allowed: answer_allowed,
                    display_answer: display_answer,
                    answer: answer,
                    has_answered: has_answered,
                    selected_option: selected_option,
                    response_type: response_type,
                    mfr_value: mfr_value,
                    is_maths: question.section == 2,
                    map: [ 'a', 'b', 'c', 'd', 'e', 'f' ]
                } );
            }
            console.log( 'unexpected error occurred' );
        }
    );
}

function shuffle(array) {
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

exports.validate_answer = function( req, res ) {
    var question_id = req.params.id,
        answer = validator.trim( req.body.answer).toLowerCase(),
        user_id = req.session.u[ 0 ],
        mfr_clicked = req.body.mfr_clicked,
        mfr_value = req.body.mfr_value,
        answer_submitted = req.body.answer_submitted,
        cleared_response = req.body.cleared_response;

    if( !question_id || question_id < qid_min + 1 || question_id > qid_max + 1 ) {
        console.log( "Invalid question" );
        return commons.flash_and_redirect( 'danger', 'Question not found.', '/questions', res, req );
    }

    if( answer_submitted === 'true' && !answer ) {
        //console.log( "Empty answer yo" );
        return commons.flash_and_redirect( 'danger', 'Please type an answer before submitting.', '/questions/' + question_id, res, req );
    }

    var question = questions[ req.session.question_sheet[ question_id - 1 ] ];
    var actual_question_id = question.question_no - 1;

    Response.find( { user_id: user_id, question_no: actual_question_id }, function( error, responses ){
        if( !error ) {
            var prior_response_id = '';
            if( responses.length > 0 ) {
                // we have prior responses...
                responses.forEach( function( e ){
                    prior_response_id = e._id;
                });
            }

            if( cleared_response === 'true' ) {
                add_response( prior_response_id, user_id, actual_question_id, question_id - 1, question.section, null, null, null, req, true, false );
                return res.redirect( get_next_question_path( question_id - 1 ) );
            }

            var correct_answer = false, answer_points = 0;

            // MFR was turned on
            if( mfr_clicked === 'true' ) {
                mfr_clicked = true;
                mfr_value = mfr_value === 'true';
            }
            else {
                mfr_clicked = false;
                mfr_value = null;
            }

            // ANSWER was submitted
            if( answer_submitted === 'true' ) {
                answer_submitted = true;
                if( question.answer == answer ) {
                    correct_answer = true;
                    answer_points = question.correct_points;
                }
            }
            else {
                answer_submitted = false;
                answer = null;
                correct_answer = null;
                answer_points = null;
            }

            // MFR was not turned on
            add_response( prior_response_id, user_id, actual_question_id, question_id - 1, question.section, answer, correct_answer, answer_points, req, answer_submitted, mfr_clicked, mfr_value );
            return res.redirect( get_next_question_path( question_id ) );
        }
        console.log( "unexpected error occurred" );
        return commons.flash_and_redirect( 'danger', 'Unexpected error occurred. Please try again.', '/questions/' + question_id, res, req );
    } );

}

exports.start_page = function( req, res ) {

    if( req.session.sa != null ) {
        return commons.flash_and_redirect( 'warning', 'Your exam has already started!', '/questions', res, req );
    }
    else {
        res.render( 'start', {
            path: '/start',
            title: commons.quiz_name + ' | Start',
            name: req.session.u[1]
        } );
    }

}

exports.start_quiz = function( req, res ) {

    if( new Date().getTime() < commons.quiz_starts_at ) {
        return commons.flash_and_redirect( 'info', "Exam hasn't started yet.", '/start', res, req );
    }

    var user_id = req.session.u[ 0 ];
    if( req.session.sa == null ) {

        User.findOneAndUpdate( { user_id: user_id }, { started_at: Date.now() } ).exec();
        req.session.sa = Date.now();

        // started the quiz.. redirect user to question #1
        return commons.flash_and_redirect( 'success', 'Your exam has started!', '/questions/1', res, req );
    }
    else {
        // user has already started the quiz.. cannot start again!
        return commons.flash_and_redirect( 'warning', 'Your exam has already started.', '/questions', res, req );
    }

}

exports.stop_quiz = function( req, res ) {

    var user_id = req.session.u[ 0 ];
    if( !req.session.is_completed ) {

        User.findOneAndUpdate( { user_id: user_id }, { quiz_completed_at: Date.now(), quiz_completed: true } ).exec();
        req.session.is_completed = true;
        // stopped the quiz.. redirect user to dashboard
        return commons.flash_and_redirect( 'info', 'Your exam has been submitted!', '/questions', res, req );
    }
    else {
        // user has already stopped the quiz.. cannot stop again!
        return commons.flash_and_redirect( 'warning', 'Your exam has already been submitted.', '/questions', res, req );
    }

}

exports.exam_must_be_over = function( req, res, next ) {
    // the exam is under time limit
    if( commons.is_under_time_limit( req.session.sa ) ) {
        // and has been submitted manually
        if( req.session.is_completed === true ) {
            // hence, is over!
            next( );
            return;
        }
    }
    // is not under time limit
    else {
        // hence, is over!
        next( );
        return;
    }

    return commons.flash_and_redirect( 'danger', 'Your exam is not over yet.', '/questions', res, req );
}

exports.exam_must_be_started = function( req, res, next ) {

    if( req.session.sa == null ) {
        // user hasn't started the quiz yet
        return commons.flash_and_redirect( 'danger', 'You should start the exam before viewing the questions!', '/start' ,res, req );
    }

    next();
}

exports.exam_must_not_be_over = function( req, res, next ) {

    // the exam is under time limit
    if( commons.is_under_time_limit( req.session.sa ) ) {
        // and has not been submitted manually
        if( req.session.is_completed !== true ) {
            // hence, is not yet over!
            next( );
            return;
        }
    }

    return commons.flash_and_redirect( 'danger', 'Your time is over.', '/questions', res, req );
}

function increment_score( user_id, score, question_section, req ) {
    var user_score = req.session.u[ 2 ];
    user_score = parseInt( user_score + score );
    req.session.u[ 2 ] = user_score;

    User.findOne( { user_id: user_id }, { section_wise_score: 1 }, function( error, result ){
        if( error ) {
          console.log( 'unexpected error occurred' );
          console.error( 'WARNING! SCORE DISCREPANCY OCCURRED.' );
        }
        else {
          var current_section_wise_score = result.section_wise_score;
          var to_increment = _.findIndex( current_section_wise_score, { section: question_section } );
          var section_score = current_section_wise_score[ to_increment ].score;
          section_score = parseInt( section_score + score );
          current_section_wise_score[ to_increment ] = { section: question_section, score: section_score };
          User.update( { user_id: user_id }, { section_wise_score: current_section_wise_score } ).exec();
          User.findOneAndUpdate( { user_id: user_id }, { score: user_score }).exec();
        }
    } );
    // moved this to be called from add_response -- this is because we are collecting last submission times even for incorrect answers now
}

function update_last_submission( user_id, req ) {
    var started_at = new Date( req.session.sa ).getTime();
    var last_change_in = new Date().getTime() - started_at;
    req.session.ls = Date.now();
    User.findOneAndUpdate( { user_id: user_id }, { last_submission: req.session.ls, last_change_in: last_change_in }).exec();
}

function add_response( prior_response_id, user_id, question_no, displayed_question_no, question_section, response, correct, score, req, answer_submitted, mfr_clicked, mfr_value ) {

    var to_update = false;
    var response_object = { };

    if( !!prior_response_id ) {
        to_update = true;
    }

    if( to_update ) {
        if( answer_submitted ) {
            response_object = {
                response_type: 'answer',
                response: response,
                correct: correct,
                score: score,
                updated: Date.now( )
            };
        }
        if( mfr_clicked ) {
            response_object[ 'mfr_value' ] = mfr_value;
        }
        Response.update( { "_id": prior_response_id }, response_object ).exec( );
    }
    else {
        if( answer_submitted ) {
            response_object = {
                response_type: 'answer',
                user_id: user_id,
                question_no: question_no,
                displayed_question_no: displayed_question_no,
                question_section: question_section,
                response: response,
                correct: correct,
                score: score,
                created: Date.now( )
            };
            if( mfr_clicked ) {
                response_object[ 'mfr_value' ] = mfr_value;
            }
        }
        else {
            response_object = {
              response_type: 'review',
              user_id: user_id,
              question_no: question_no,
              displayed_question_no: displayed_question_no,
              question_section: question_section,
              mfr_value: true,
              response: null,
              correct: null,
              score: null,
              created: Date.now( )
            }
        }
        Response.create( response_object );
    }

    update_last_submission( user_id, req );
}

function get_empty_question_status( question_sheet ) {
    var question_status = new Array();
    for( var i = 0; i < question_sheet.length; i++ ) {
        question_status.push( {
            status: 1,
            section: questions[ question_sheet[ i ] ].section,
        } );
    }

    return question_status;
}

function get_next_question_path( question_id ) {
    return question_id == qid_max + 1 ? '/questions' : '/questions/' + (++question_id);
}
