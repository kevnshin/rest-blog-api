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


router.get('/:id', function (req, res) {
  Post.findById(req.params.id, function (err, post) {
    if(err) {
      console.log(err);
    }
    res.json({"post": post});
  })
})

module.exports = router;
