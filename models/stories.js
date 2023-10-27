const mongoose = require('mongoose');

const contextSchema = mongoose.Schema({ // Sous-document
    initialStory: String,
    players: [String],
    onBoardingData: [String]
})

const storySchema = mongoose.Schema({ // Sous-document
    prompt: String,
    reponse: String,
    actions: [String]
})

const systemSchema = mongoose.Schema({ // Main Schema
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "users" }, // Clef étrangère
    context: contextSchema,
    story: storySchema
});

const System = mongoose.model('system', systemSchema);

module.exports = Story;