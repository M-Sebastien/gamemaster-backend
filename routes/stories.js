var express = require('express');
var router = express.Router();

require("../models/connection");
const Story = require("../models/stories");

router.get('/getStories', (req, res) => {
    Story.find().then(data => {
        console.log(data);
        res.json({ Stories: data })
    })
})

module.exports = router;