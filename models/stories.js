const mongoose = require('mongoose');

const playerSchema = mongoose.Schema({
    player: String,
    playerDj: String
})

const systemSchema = mongoose.Schema({
    prompt: String,
    reponse: String,
    actions: [String]
})

const storySchema = mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "users" },
    players: playerSchema,

    // Déterminer quelles clefs mettre dans le sous-document "stories"
    system: systemSchema
});

const Story = mongoose.model('stories', storySchema);

module.exports = Story;