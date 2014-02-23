var mongoose = require( 'mongoose');

var responseSchema = new mongoose.Schema({
    user_id: { type:String, index:true },
    question_no: Number, // starts with 0
    response: String,
    correct: Boolean,
    score: Number,
    created: Date
});

var Response = module.exports = mongoose.model( 'Response', responseSchema );