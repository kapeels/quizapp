var fs = require('fs');
var csv = require('csv');
var sleep = require( 'sleep' );
var commons = require( '../commons.js' );

var all_questions = [ ];

var map = {
  'A': 1,
  'B': 2,
  'C': 3,
  'D': 4,
  'a': 1,
  'b': 2,
  'c': 3,
  'd': 4
};

function parseOptions( row ) {
  var option_array = [ ];
  var options = [ row[ 2 ], row[ 3 ], row[ 4 ], row[ 5 ] ];
  for( var i = 0; i < 4; i++ ) {
    var option = options[ i ].trim( );
    if( option[ 0 ] === 'i' && option[ 1 ] === 'm' && option[ 2 ] === 'a' && option[ 3 ] === 'g' && option[ 4 ] === 'e' ) {
      option = '<span><img src="/public/images/answers/' + option + '"</span>';
    }
    option_array.push( { text: option, value: i+1 } );
  }
  return option_array;
}

function parseQuestionStatement( row ){
  var statement = '';
  var incoming = row[ 0 ].trim( )
  if( !!row[ 0 ] ) {
    statement += incoming + ' ';
  }
  if( row[ 7 ] === '1' ) {
    statement += '<span><img src="/public/images/question/' + row[ 8 ] + '" /></span>'
  }
  return statement;
}

var last_row;
// opts is optional
index = 100;
csv()
    .from.stream(fs.createReadStream('./maths.csv'))
    .transform( function(row){
        index++;
        console.log( 'attempting #' + index );
        if( index < 126 ) {
          last_row = row;
          return;
        }
      //  console.log(row);
        var question_object = {
          question_no: index,
          type: 2,
          statement: parseQuestionStatement( row ),
          correct_points: 2,
          incorrect_points: 0,
          multiple_responses: false,
          section: 2,
          answer: map[ row[ 6 ] ],
          choice: parseOptions( row ),
          additional_text: null
        };
        all_questions.push(question_object);
        last_row = row;
        //row.unshift(row.pop());
        return row;
    })
    .on('record', function(row,index){
        //sleep.sleep( 1 );
      //  console.log('#'+index,row);
    })
    .on('end', function(count){
        console.log(JSON.stringify(all_questions));
        console.log('Number of lines processed: '+count);
    })
    .on('error', function(error){
        console.log(error.message);
    });
