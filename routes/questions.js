
var questions = require( '../models/questions.js' ),
    mongoose = require( 'mongoose'),
    Response = mongoose.model('Response'),
    User = mongoose.model( 'User' ),
    validator = require( 'validator'),
    moment = require( 'moment' );

var qid_max = questions.length - 1,
    qid_min = 0;

exports.show_page = function( req, res ){
    if( req.session.sa === null ) {
        return commons.flash_and_redirect( 'info', 'You must start the quiz to view questions.', '/start', res, req );
    }
    Response.find( { user_id: req.session.u[ 0 ] }, null, { sort: { created: 1 } }, function( error, responses ){
        if( !error ) {
            var questions_status = get_empty_question_status();
            if( responses ) {
                responses.forEach( function( e, i, a ) {
                    var mr = questions_status[ e.question_no ].multiple_responses;
                    questions_status[ e.question_no ] = {
                        completed_at:  e.correct || ( !e.correct && !mr ) ? moment( e.created ).calendar( ) : 'Incomplete',
                        complete: e.correct,
                        attempted: true,
                        multiple_responses: mr
                    }
                } );
            }
            res.render( 'questions', {
                title: commons.quiz_name + ' | Play!',
                last_submission: req.session.ls ? moment( req.session.ls ).calendar() : 'Never',
                score: req.session.u[2],
                questions: questions_status,
                can_solve: commons.is_under_time_limit( req.session.sa )
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

    var question = questions[ question_id - 1 ];

    Response.find(
        { user_id: req.session.u[ 0 ], question_no: question_id - 1 },
        null,
        { sort: { created: 1 } },
        function( error, responses ){
            if( !error ) {
                var answered_correctly = false, has_answered = false, answer_allowed = true;

                if( responses ) {
                    responses.forEach( function( e ){
                        has_answered = true;
                        if( e.correct ) {
                            answered_correctly = true;
                        }
                    } );
                }

                if( has_answered ) {
                    // user has answered the question once

                    if( !answered_correctly ) {
                        // user has not answered the question correctly

                        if( !question.multiple_responses ) {
                            // this question can't have multiple responses
                            answer_allowed = false;
                        }

                    }
                    else {
                        // user has already answered correctly
                        answer_allowed = false;
                    }

                }

                // shuffle answers if mcq!
                if( question.type == '2' ) {
                    question.choice = shuffle( question.choice );
                }
                return res.render( 'question_page',{
                    path: '/questions',
                    title: commons.quiz_name + ' | Question ' + question_id,
                    question_id: question_id,
                    qid_max: qid_max,
                    qid_min: qid_min,
                    question: question,
                    answer_allowed: answer_allowed
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
        user_id = req.session.u[ 0 ];

    if( !question_id || question_id < qid_min + 1 || question_id > qid_max + 1 ) {
        console.log( "Invalid question" );
        return commons.flash_and_redirect( 'danger', 'Question not found.', '/questions', res, req );
    }

    if( !answer ) {
        //console.log( "Empty answer yo" );
        return commons.flash_and_redirect( 'danger', 'Please type an answer before submitting.', '/questions/' + question_id, res, req );
    }

    var question = questions[ question_id - 1 ];
    if( question.answer == answer ) {
        Response.find( { user_id: user_id, question_no: question_id - 1 }, function( error, responses ){
            if( !error ) {
                if( responses != null ) {
                    // we have prior responses... check if any of it was correct!
                    var answered_already = false, answered_correctly = false;
                    responses.forEach( function( e ){
                        answered_already = true;
                        if( e.correct ) {
                            // user had already submitted a correct answer for this question...
                            // cannot accept answer again
                            answered_correctly = true;
                        }
                    });
                    if( answered_already ) {
                        // user had already answered this question before
                        // and is answering again
                        if( answered_correctly ) {
                            // and user had answered correctly the last time
                            // console.log( 'correct answer resubmitted. no points awarded yo' );
                            return commons.flash_and_redirect( 'warning', 'You have already submitted correct answer for this question. No points were awarded.', '/questions', res, req );
                        }
                        else {
                            // and user had not answered correctly the last time
                            if( !question.multiple_responses ) {
                                // and this question does not allow multiple submissions
                                // so exit giving an error!
                                // console.log( 'question does not allow multiple answers.. exiting' );
                                return commons.flash_and_redirect( 'danger', 'You cannot submit answer for this question again.', '/questions', res, req );
                            }
                        }
                    }
                }
                add_response( user_id, question_id - 1, answer, true, question.correct_points );
                increment_score( user_id, question.correct_points, req );

                if( commons.quiz_type == 'wizard' ) {
                    // if the quiz is of wizard type, don't notify about the answer type... and redirect to next question
                    return res.redirect( get_next_question_path( question_id ) );
                }
                else {
                    // if the quiz is of classic type, notify about the answer type... and redirect to the questions dashboard
                    return commons.flash_and_redirect( 'success', 'Your answer was correct.', '/questions', res, req );
                }
            }
            console.log( "unexpected error occurred" );
            return commons.flash_and_redirect( 'danger', 'Unexpected error occurred. Please try again.', '/questions/' + question_id, res, req );
        } );

    }
    else {
        // incorrect answer.. but add to record anyway!
        add_response( user_id, question_id - 1, answer, false, question.incorrect_points );

        // do negative marking if this question has it!
        if( question.incorrect_points != null && question.incorrect_points > 0 ) {
            increment_score( user_id, 0 - question.incorrect_points, req )
        }
        // console.log( "incorrect answer man. try again" );

        if( commons.quiz_type == 'wizard' ) {
            // if quiz is of wizard type, then don't consider multiple responses
            return res.redirect( get_next_question_path( question_id ) );
        }
        else {
            return commons.flash_and_redirect( 'warning', 'Incorrect answer.', question.multiple_responses ? '/questions/' + question_id : '/questions', res, req );
        }
    }

}

exports.start_page = function( req, res ) {

    if( req.session.sa != null ) {
        return commons.flash_and_redirect( 'warning', 'Your quiz has already started!', '/questions', res, req );
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
        return commons.flash_and_redirect( 'info', "Quiz hasn't started yet. It will start at 12 PM. Please check back again soon.", '/start', res, req );
    }

    var user_id = req.session.u[ 0 ];
    if( req.session.sa == null ) {

        User.findOneAndUpdate( { user_id: user_id }, { started_at: Date.now() } ).exec();
        req.session.sa = Date.now();

        // started the quiz.. redirect user to question #1
        return commons.flash_and_redirect( 'success', 'Your quiz has started!', '/questions/1', res, req );
    }
    else {
        // user has already started the quiz.. cannot start again!
        return commons.flash_and_redirect( 'warning', 'Your quiz has already started.', '/questions', res, req );
    }

}

exports.must_be_within_time_limit = function( req, res, next ) {
    if( req.session.sa == null ) {
        // user hasn't started the quiz yet
        return commons.flash_and_redirect( 'danger', 'You should start the quiz before viewing the questions!', '/start' ,res, req );
    }
    else {
        // user has started the quiz
        if( !commons.is_under_time_limit( req.session.sa ) ) {
            // and his/her time is over
            return commons.flash_and_redirect( 'danger', 'Your time is over.', '/questions', res, req );
        }
    }
    next();
}

function increment_score( user_id, score, req ) {
    var user_score = req.session.u[ 2 ];
    user_score = parseInt( user_score + score );
    req.session.u[ 2 ] = user_score;

    var started_at = new Date( req.session.sa ).getTime();
    var last_change_in = new Date().getTime() - started_at;
    req.session.ls = Date.now();
    User.findOneAndUpdate( { user_id: user_id }, { score: user_score, last_submission: req.session.ls, last_change_in: last_change_in }).exec();
}

function add_response( user_id, question_no, response, correct, score ) {

    if( !user_id || ( question_no < qid_min && question_no > qid_max ) || !response ) {
        console.log( 'incorrect response params' );
        return;
    }

    Response.create( {
        user_id: user_id,
        question_no: question_no,
        response: response,
        correct: correct,
        score: score,
        created: Date.now()
    } );

}

function get_empty_question_status( ) {
    var question_status = new Array();
    questions.forEach( function( e ){
        question_status.push( {
            completed_at: 'Incomplete',
            correct: false,
            attempted: false,
            multiple_responses: e.multiple_responses
        } );
    } );
    return question_status;
}

function get_next_question_path( question_id ) {
    return question_id == qid_max + 1 ? '/questions' : '/questions/' + (++question_id);
}