var mongoose = require( 'mongoose');

var questionSheetSchema = new mongoose.Schema({
    user_id: { type:String, index:true },
    question_sequence: [ Number ]
});

var QuestionSheet = module.exports = mongoose.model( 'QuestionSheet', questionSheetSchema );
