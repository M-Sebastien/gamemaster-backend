const mongoose = require('mongoose');

const questionSchema = mongoose.Schema({
    question: String,
    choice: [String],
    number: Number
});

const Question = mongoose.model('questions', questionSchema);

module.exports = Question;