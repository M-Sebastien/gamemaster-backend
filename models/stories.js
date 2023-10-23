const mongoose = require('mongoose');

const storySchema = mongoose.Schema({

    // userId via clef étrangère ou sous-document ?
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "users" },

    players: [String],
    stories: [String]
});

const Story = mongoose.model('stories', storySchema);

module.exports = Story;