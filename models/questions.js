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

questions.push( {
    question_no: 1,
    type: 1,
    statement: 'In which game has India won all the world cups in both men and women category?',
    correct_points: 10,
    incorrect_points: 0,
    multiple_responses: true,
    answer: 'kabbadi',
    additional_text: ''
} );

questions.push( {
    question_no: 2,
    type: 1,
    statement: 'Name the township in India that consists of residents from about 45 nations.',
    correct_points: 10,
    incorrect_points: 0,
    multiple_responses: true,
    answer: 'auroville',
    additional_text: ''
} );

/** PROGATE question on #3 

questions.push( {
    question_no: 3,
    type: 1,
    statement: '',
    correct_points: 10,
    incorrect_points: 2,
    multiple_responses: true,
    answer: 'sunday',
    additional_text: ''
} );*/

questions.push( {
    question_no: 3,
    type: 1,
    image: '/images/q4.jpeg',
    statement: 'When the person in the picture tried to shake hands with Sachin Tendulkar during a practice session, a police officer thrashed him.  On Sachin Tendulkar\'s intervention and request he was let off  and the police officer tendered an apology to him. Name the day of this incidence (Eg. Monday, Wednesday, etc).',
    correct_points: 10,
    incorrect_points: 2,
    multiple_responses: true,
    answer: 'sunday',
    additional_text: 'Every incorrect answer submission for this particular question will result in 2 negative points.'
} );

questions.push( {
    question_no: 4,
    type: 1,
    image: '/images/q5.jpg',
    statement: 'In 1977, a machine was used to confirm the calculation given performed mentally by her. How many number of instruction did the machine have?',
    correct_points: 10,
    incorrect_points: 2,
    multiple_responses: true,
    answer: '38',
    additional_text: ''
} );

questions.push( {
    question_no: 5,
    type: 1,
    statement: 'According to the IT ACT, 2008<br /><br /> "With its grammatical variations and cognate expressions means gaining entry into, instructing or communicating with the  logical, arithmetical, or memory function resources of a computer, computer  system or computer network" <br /><br />Name the word for which word this definition has been created',
    correct_points: 10,
    incorrect_points: 0,
    multiple_responses: true,
    answer: 'access',
    additional_text: ''
} );

questions.push( {
    question_no: 6,
    type: 1,
    statement: 'The prestigious Columbia University of USA completed its 250 years of establishment in 2004. To commemorate this, a memorial was built inscribing a list of 100 pioneering students of this university. This elite list contains many prestigious personalities. What is the surname of the only Indian in the list?',
    correct_points: 10,
    incorrect_points: 0,
    multiple_responses: true,
    answer: 'ambedkar',
    additional_text: ''
} );

/** dont use this question as it is -- add some detail */

questions.push( {
    question_no: 7,
    type: 1,
    statement: 'This is a biochemist who shared his nobel prize with two others, one has received his BS degree in 1948. What was the cause of his death?',
    correct_points: 10,
    incorrect_points: 0,
    multiple_responses: true,
    answer: 'cancer',
    additional_text: ''
} );

questions.push( {
    question_no: 8,
    type: 1,
    statement: 'The world war is well known to us. This term emerged in the early 20th century. What is it known as in Germany?',
    correct_points: 10,
    incorrect_points: 0,
    multiple_responses: true,
    answer: 'weltkrieg',
    additional_text: ''
} );

questions.push( {
    question_no: 9,
    type: 1,
    statement: '20°31\'56"N 75°44\'44"E are the co-ordinates for a site of great and ancient Indian art. What is the first name of the officer who discovered it in modern times?',
    correct_points: 10,
    incorrect_points: 0,
    multiple_responses: true,
    answer: 'john',
    additional_text: ''
} );

questions.push( {
    question_no: 10,
    type: 1,
    statement: 'A software company is the official cloud partner of ICC World Cup. This company acquired a social media analytics company, which is partnered with a social media data aggregation company. Name this company.',
    correct_points: 10,
    incorrect_points: 0,
    multiple_responses: true,
    answer: 'gnip',
    additional_text: ''
} );

questions.push( {
    question_no: 11,
    type: 1,
    statement: 'A a computer language developed in 1973 at AT&T Bell Labs. In which year, did one of the founder of this language receive the Turing Award?',
    correct_points: 10,
    incorrect_points: 0,
    multiple_responses: true,
    answer: '1983',
    additional_text: ''
} );

questions.push( {
    question_no: 12,
    type: 1,
    statement: 'An actor made his bollywood debut in 1992 with a film in which he played a role of a man with some disorder/syndrome willing to meet the president of USA. This disorder/syndrome is named after a person. What is the last name/surname of this person?',
    correct_points: 10,
    incorrect_points: 0,
    multiple_responses: true,
    answer: 'asperger',
    additional_text: ''
} );

questions.push( {
    question_no: 13,
    type: 1,
    statement: 'One of the five co-founders of Facebook, initiated legal actions against Mark Zuckerberg. A Hollywood movie was made to depict this realtion between Zuckerberg and this person. What is the first name of the actor who played the role of this other co-founder?',
    correct_points: 10,
    incorrect_points: 0,
    multiple_responses: true,
    answer: 'andrew',
    additional_text: ''
} );

questions.push( {
    question_no: 14,
    type: 1,
    statement: 'An organisation publishes secret information, news leaks, and classified media from anonymous sources. What is the online nick name under which the founder of this organization started hacking activities?',
    correct_points: 10,
    incorrect_points: 0,
    multiple_responses: true,
    answer: 'mendax',
    additional_text: ''
} );

questions.push( {
    question_no: 15,
    type: 1,
    statement: 'In about 260 BCE Asoka waged a bitterly destructive war against a state. It is said that a river turned into red with the blood of the slain. What is the last name of the current chief minister of this state from where the river flows?',
    correct_points: 10,
    incorrect_points: 0,
    multiple_responses: true,
    answer: 'patnaik',
    additional_text: ''
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
} );

*/

module.exports = questions;