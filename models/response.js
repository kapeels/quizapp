var mongoose = require( 'mongoose');

var responseSchema = new mongoose.Schema({
    user_id: { type:String, index:true },
    response_type: String,
    mfr_value: { type: Boolean, default: false },
    displayed_question_no: Number,
    question_no: Number, // starts with 0
    question_section: Number,
    response: String,
    correct: Boolean,
    score: Number,
    created: Date,
    updated: Date
});

var Response = module.exports = mongoose.model( 'Response', responseSchema );
