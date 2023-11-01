const mongoose = require('mongoose');

const playerSchema = mongoose.Schema({ // Sous-document
    name: String,
    character: String
})

const contextSchema = mongoose.Schema({ // Sous-document
    title: String,
    initialStory: String,
    players: [playerSchema],
    onBoardingData: [String]
})

const roundSchema = mongoose.Schema({ // Sous-document
    turn: Number,
    player: playerSchema,
    story: String,
    choices: [String],
    action: String
})

const storiesSchema = mongoose.Schema({ // Main Schema
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "users" }, // Clef étrangère
    context: contextSchema,
    story: [roundSchema]
});

const Stories = mongoose.model('stories', storiesSchema);

module.exports = Stories;