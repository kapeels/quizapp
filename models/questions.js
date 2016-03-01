var questions = new Array();

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
//

questions.push( {
    question_no: 1,
    type: 2,
    statement: 'The grapes are now _____ enough to be picked.',
    correct_points: 1,
    incorrect_points: 1,
    multiple_responses: false,
    answer: 3,
    choice: new Array(
        { text: "ready", value: 1 },
        { text: "mature", value: 2 },
        { text: "ripe", value: 3 },
        { text: "advanced", value: 4 }
    ),
    additional_text: null
} );

questions.push( {
    question_no: 2,
    type: 2,
    statement: 'Where is the Railway Staff College located?',
    correct_points: 1,
    incorrect_points: 1,
    multiple_responses: false,
    answer: 3,
    choice: new Array(
        { text: "Pune", value: 1 },
        { text: "Allahadbad", value: 2 },
        { text: "Vadodara", value: 3 },
        { text: "Mumbai", value: 4 }
    ),
    additional_text: null
} );


questions.push( {
    question_no: 3,
    type: 2,
    statement: 'The largest copper producing country in the world is ____________ .',
    correct_points: 1,
    incorrect_points: 1,
    multiple_responses: false,
    answer: 1,
    choice: new Array(
        { text: "Chile", value: 1 },
        { text: "Russia", value: 2 },
        { text: "South Africa", value: 3 },
        { text: "China", value: 4 }
    ),
    additional_text: null
} );

questions.push( {
    question_no: 4,
    type: 2,
    statement: 'The tutor of Alexander the great was _______________ .',
    correct_points: 2,
    incorrect_points: 2,
    multiple_responses: false,
    answer: 4,
    choice: new Array(
        { text: "Darius", value: 1 },
        { text: "Cyrus", value: 2 },
        { text: "Socrates", value: 3 },
        { text: "Aristotle", value: 4 }
    ),
    additional_text: null
} );

questions.push( {
    question_no: 5,
    type: 2,
    statement: 'Who invented Napier\'s Bones?',
    correct_points: 1,
    incorrect_points: 1,
    multiple_responses: false,
    answer: 1,
    choice: new Array(
        { text: "John Napier", value: 1 },
        { text: "William Oughtred", value: 2 },
        { text: "Charles Babbage", value: 3 },
        { text: "Napier Bone", value: 4 }
    ),
    additional_text: null
} );


questions.push( {
    question_no: 6,
    type: 2,
    statement: 'Which one among the following has the largest shipyard in India?',
    correct_points: 2,
    incorrect_points: 2,
    multiple_responses: false,
    answer: 2,
    choice: new Array(
        { text: "Kolkata", value: 1 },
        { text: "Kochi", value: 2 },
        { text: "Mumbai", value: 3 },
        { text: "Visakhapatnam", value: 4 }
    ),
    additional_text: null
} );


questions.push( {
    question_no: 7,
    type: 2,
    statement: 'What is the code name for Microsoft Windows Vista?',
    correct_points: 1,
    incorrect_points: 1,
    multiple_responses: false,
    answer: 1,
    choice: new Array(
        { text: "Longhorn", value: 1 },
        { text: "Longhund", value: 2 },
        { text: "Stackspray", value: 3 },
        { text: "Pearl", value: 4 }
    ),
    additional_text: null
} );
//

questions.push( {
    question_no: 8,
    type: 2,
    statement: 'The Golf player Vijay Singh belongs to which country?',
    correct_points: 1,
    incorrect_points: 1,
    multiple_responses: false,
    answer: 2,
    choice: new Array(
        { text: "USA", value: 1 },
        { text: "Fiji", value: 2 },
        { text: "India", value: 3 },
        { text: "UK", value: 4 }
    ),
    additional_text: null
} );

questions.push( {
    question_no: 9,
    type: 2,
    statement: 'The first woman to conquer Mount Everest twice is ______ .',
    correct_points: 1,
    incorrect_points: 1,
    multiple_responses: false,
    answer: 3,
    choice: new Array(
        { text: "Surja Lata Devi", value: 1 },
        { text: "Jyoti Randhawa", value: 2 },
        { text: "Santosh Yadav", value: 3 },
        { text: "Suma Shirur", value: 4 }
    ),
    additional_text: null
} );

questions.push( {
    question_no: 10,
    type: 2,
    statement: 'The Kaziranga National Park is situated in _______ .',
    correct_points: 1,
    incorrect_points: 1,
    multiple_responses: false,
    answer: 4,
    choice: new Array(
        { text: "Odisha", value: 1 },
        { text: "Gujarat", value: 2 },
        { text: "Rajasthan", value: 3 },
        { text: "Assam", value: 4 }
    ),
    additional_text: null
} );

questions.push( {
    question_no: 11,
    type: 2,
    statement: 'In a bid to combat Zika Virus, World Health Organization (WHO) has infused how much amount along with fast-tracking vaccines and diagnostics?',
    correct_points: 1,
    incorrect_points: 1,
    multiple_responses: false,
    answer: 2,
    choice: new Array(
        { text: "$55 million", value: 1 },
        { text: "$56 million", value: 2 },
        { text: "$57 million", value: 3 },
        { text: "$58 million", value: 4 }
    ),
    additional_text: null
} );

questions.push( {
    question_no: 12,
    type: 2,
    statement: 'Which of the following company has launched the world\'s cheapest smartphone, \'Freedom 251\'?',
    correct_points: 1,
    incorrect_points: 1,
    multiple_responses: false,
    answer: 3,
    choice: new Array(
        { text: "Intex Technologies", value: 1 },
        { text: "Lava International", value: 2 },
        { text: "Ringing Bells Pvt. Ltd.", value: 3 },
        { text: "YU Televentures", value: 4 }
    ),
    additional_text: null
} );

questions.push( {
    question_no: 13,
    type: 2,
    statement: 'Which of the following lyricist has entered in the Guinness Book of World Records for writing the most inexhaustible number of songs in Bollywood?',
    correct_points: 1,
    incorrect_points: 0,
    multiple_responses: false,
    answer: 3,
    choice: new Array(
        { text: "Ravi Jadhav", value: 1 },
        { text: "Gulzar", value: 2 },
        { text: "Sameer Anjaan", value: 3 },
        { text: "Javed Akhtar", value: 4 }
    ),
    additional_text: null
} );

questions.push( {
    question_no: 14,
    type: 1,
    statement: 'In Chess, a knight moves two squares in one direction and one square in another direction,<br /> \
    ending up on the diagonally opposite corner of a 2*3 grid.<br /> \
    Intervening squares can be occupied.<br /> \
    Find the maximum number of the knights which can be placed on <br /> \
    a 8*8 chess board so that no knight threatens another knight <br /> \
    (can move into a square occupied by one of the another knights).',
    correct_points: 2,
    incorrect_points: 0,
    multiple_responses: false,
    answer: '32',
    additional_text: 'Type your answer below in lower case letters'
} );

questions.push( {
    question_no: 15,
    type: 2,
    statement: 'Given the sequence of terms, AD CG FK JP, the next term is ____ ',
    correct_points: 1,
    incorrect_points: 1,
    multiple_responses: false,
    answer: 1,
    choice: new Array(
        { text: "OV", value: 1 },
        { text: "OW", value: 2 },
        { text: "PV", value: 3 },
        { text: "PW", value: 4 }
    ),
    additional_text: null
} );

questions.push( {
    question_no: 16,
    type: 2,
    statement: 'Look at this series: 14, 28, 20, 40, 32, 64, ____ What number should fill the blank?',
    correct_points: 1,
    incorrect_points: 1,
    multiple_responses: false,
    answer: 2,
    choice: new Array(
        { text: "52", value: 1 },
        { text: "56", value: 2 },
        { text: "96", value: 3 },
        { text: "128", value: 4 }
    ),
    additional_text: null
} );


questions.push( {
    question_no: 17,
    type: 2,
    statement: 'Which of the following consists of two plates separated by a dielectric and can store charge?',
    correct_points: 1,
    incorrect_points: 1,
    multiple_responses: false,
    answer: 3,
    choice: new Array(
        { text: "Inductor", value: 1 },
        { text: "Transistor", value: 2 },
        { text: "Capacitor", value: 3 },
        { text: "Relay", value: 4 }
    ),
    additional_text: null
} );

questions.push( {
    question_no: 18,
    type: 2,
    statement: 'The country that shares longest border with India is',
    correct_points: 2,
    incorrect_points: 2,
    multiple_responses: false,
    answer: 2,
    choice: new Array(
        { text: "China", value: 1 },
        { text: "Bangladesh", value: 2 },
        { text: "Nepal", value: 3 },
        { text: "Pakistan", value: 4 }
    ),
    additional_text: null
} );

questions.push( {
    question_no: 19,
    type: 2,
    statement: 'Where is the film and TV institute of India located?',
    correct_points: 1,
    incorrect_points: 1,
    multiple_responses: false,
    answer: 1,
    choice: new Array(
        { text: "Pune", value: 1 },
        { text: "Rajkot", value: 2 },
        { text: "Pimpri", value: 3 },
        { text: "Perambur", value: 4 }
    ),
    additional_text: null
} );

questions.push( {
    question_no: 20,
    type: 2,
    statement: 'Veselin Tapolev who became the World Champion recently, is associated with which of the following games/sports?',
    correct_points: 1,
    incorrect_points: 1,
    multiple_responses: false,
    answer: 1,
    choice: new Array(
        { text: "Chess", value: 1 },
        { text: "Golf", value: 2 },
        { text: "Snooker", value: 3 },
        { text: "None of these", value: 4 }
    ),
    additional_text: null
} );

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



module.exports = questions;
