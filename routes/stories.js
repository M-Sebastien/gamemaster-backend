var express = require('express');
var router = express.Router();

require("../models/connection");
const Stories = require("../models/stories");
const Users = require("../models/users");

// {
//     "context": [{
//       "title": "title",
//       "initialStory": "ChatGPT generated story",
//       "players": [
//         {"name": "Thom", "character": "player1"},
//         {"name": "Anso", "character": "player2"}
//         ],
//       "onBoardingData": ["answer1", "answer2", "answer3"]
//     }],
//     "story": [{
//       "turn": "1",
//       "player": "Thom",
//       "story": "Last generated story",
//       "choices": ["action1", "action2", "action3", "action4"]
//     }]
//   }

router.post("/saveStory/:token", (req, res) => {
    Users.findOne({ token: req.params.token }).then(data => {
        if (data) {
            const newStory = new Stories({
                userId: data._id,
                context: req.body.context,
                story: req.body.story,
            })

            newStory.save().then(() => {
                res.json({ result: true, newStory });
            });
        } else {
            res.json({ result: false, error: 'User not found' });
        }
    })
})

// router.get("/getStoriesByToken/:token", (req, res) => {
//     Users.find({ token: req.params.token }).then(data => {
//         res.json({ result: true, stories: data })
//     })
// })

router.get("/getStoriesByUserId/:id", (req, res) => {
    Stories.find({ userId: req.params.userId }).then(data => {
        res.json({ result: true, stories: data })
    })
})

router.get("/getStoryById/:id", (req, res) => {
    Stories.findById({ id: req.params.id }).then(data => {
        res.json({ result: true, story: data })
    })
})

router.put("/modifyStory", (req, res) => {
    Stories.updateOne()
})

module.exports = router;