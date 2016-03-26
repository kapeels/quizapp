var mongoose = require( 'mongoose');

var resultSchema = new mongoose.Schema({
    user_id: { type:String, index:true },
    score: Number,
    section_wise_score: [ Number ],
    analysis: {
        answered: Number,
        correct: Number,
        incorrect: Number
    },
    section_wise_analysis: [ {
        answered: Number,
        correct: Number,
        incorrect: Number
    } ],
    created: Date
});

var Result = module.exports = mongoose.model( 'Result', resultSchema );
