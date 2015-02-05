var express = require('express');
var router = express.Router();

var Post = require('../models/post');

router.get('/', function (req, res) {
  Post.find({}, function (err, posts) {
    if(err) {
      console.log(err);
    }

    res.json({"Posts": posts});
  })
})

module.exports = router;
