const mongoose = require('mongoose');

const questionSchema = mongoose.Schema({
    question: String,
    choices: [String],
});

const Question = mongoose.model('questions', questionSchema);

module.exports = Question;