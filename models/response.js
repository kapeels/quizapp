var mongoose = require( 'mongoose');

var responseSchema = new mongoose.Schema({
    user_id: { type:String, index:true },
    review_clicked: { type: Boolean, default: false },
    review_status: { type: Boolean, default: false },
    question_no: Number, // starts with 0
    response: String,
    correct: Boolean,
    score: Number,
    created: Date
});

var Response = module.exports = mongoose.model( 'Response', responseSchema );
