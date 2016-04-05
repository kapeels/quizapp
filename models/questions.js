/**
 *
 * question_no: start with 1 and assign incremented value for each question
 *
 * type:
     * 1 - "string" answers
     * 'answer' has the string for the answer
     * 2 - multiple choice!
     * 'choice' has array of all the choices possible
     * 'answer' has the value of the correct choice
 *
 * statement:
     * this should be the text of the question
 *
 * image:
     * image to be displayed for this question, if any
 *
 * correct_points:
     * # of points to be awarded if user submits correct answer
 *
 * incorrect_points:
     * # of points to be deducted from main score if user submits incorrect answer
 *
 * multiple_responses: (bool)
     * should multiple responses be allowed for this question?
 *
 * answer:  the answer for this question.
     * for type = 1, put the actual string of the answer in lowercase..
     * for type = 2, put the value of the choice
 *
 * additional_text:
     * hint for this question?
 *
 */

/*

questions.push( {
    question_no: 2,
    type: 1,
    statement: 'Sample question 2 with image.',
    image: 'http://placehold.it/200x150',
    correct_points: 10,
    incorrect_points: 0,
    answer: 'sample2',
    multiple_responses: true,
    additional_text: 'The answer for this question is sample2.'
} );

questions.push( {
    question_no: 3,
    type: 1,
    statement: 'Sample question 3 -- multiple_responses disabled',
    image: null,
    correct_points: 10,
    incorrect_points: 0,
    answer: 'sample3',
    multiple_responses: false,
section: 0,
    additional_text: 'The answer for this question is sample3.'
} );

questions.push( {
    question_no: 4,
    type: 1,
    statement: 'Sample question 4 -- 10 negative points if incorrect',
    image: null,
    correct_points: 10,
    incorrect_points: 10,
    answer: 'sample4',
    multiple_responses: true,
    additional_text: 'The answer for this question is sample4.'
} );

questions.push( {
    question_no: 5,
    type: 2,
    statement: 'Sample question 5 -- multiple choice question?',
    image: null,
    correct_points: 10,
    incorrect_points: 0,
    answer: 3,
    multiple_responses: true,
    additional_text: 'The answer for this question is Choice C.',
    choice: new Array(
        { text: "Choice A", value: 1 },
        { text: "Choice B", value: 2 },
        { text: "Choice C", value: 3 },
        { text: "Choice D", value: 4 }
    )
} );*/

var questions = require( './questions.json' );


module.exports = questions;
