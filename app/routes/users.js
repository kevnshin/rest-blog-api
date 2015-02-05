var express = require('express');
var router = express.Router();

var User = require('../models/user');

router.get('/', function (req, res) {
  User.find({}, function (err, users) {
    if(err) {
      return console.log(err);
    }

    res.json({"Users": users});
  })
})

router.get('/:id', function (req, res) {
  User.findById(req.params.id, function (err, user) {
    if(err) {
      return console.log(err);
    }
    res.json({"user": user});
  })

})


module.exports = router;
