var express = require('express');
var router = express.Router();

require("../models/connection");
const Stories = require("../models/stories");
const Users = require("../models/users");

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

router.get("/getStoriesByToken/:token", (req, res) => {
    Users.findOne({ token: req.params.token }).then(user => {
        Stories.find({ userId: user._id }).then(data => {
            res.json({ result: true, stories: data })
        })
    })
})

module.exports = router;