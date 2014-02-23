var mongoose = require( 'mongoose');

var userSchema = new mongoose.Schema({
    user_id: { type:String, index:true },
    password: String,
    name: String,
    phone: String,
    email: String,
    college: String,
    created: Date,
    active: Boolean,
    score: Number,
    last_change_in: { type: Number, default: 0 },
    last_submission: { type: Date, default: null },
    started_at: { type: Date, default: null }
});
// last_change_in
// this is just difference between last_submission - started_at calculated when last_submission is updated
// so as to be able to sort according the difference.


var User = module.exports = mongoose.model( 'User', userSchema );