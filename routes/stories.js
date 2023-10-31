var express = require('express');
var router = express.Router();

require("../models/connection");
const Stories = require("../models/stories");

router.post("/saveStory", (req, res) => {
    Stories.findOne({ token: req.params.token }).then(data => {
        if (data) {
            const newStory = new Stories({
                context: [{
                    title: req.body.title,
                    initialStory: req.body.initialStory,
                    players: req.body.players,
                    onBoardingData: req.body.onBoardingData
                }],
                story: [{
                    turn: req.body.turn,
                    player: req.body.player,
                    story: req.body.story,
                    choices: req.body.choices
                }]
            })

            newStory.save().then(() => {
                res.json({ result: true });
            });
        } else {
            res.json({ result: false, error: 'User not found' });
        }
    })
})

router.get("getStoriesByToken/:token", (req, res) => {
    Stories.find({ token: req.params.token }).then(data => {
        res.json({ result: true, stories: data })
    })
})

router.get("getStoryById", (req, res) => {
    Stories.findById()
})

router.put("modifyStory", (req, res) => {
    Stories.updateOne()
})

module.exports = router;