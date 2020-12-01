const express = require('express');
const postRoutes = express.Router();

let Post = require('./post.model');

// Route for sending throttle updates to
postRoutes.route('/throttle').post(function (req, res) {
  let post = new Post(req.body);

  post.save()
    .then(() => {
      res.status(200).json({'throttleOK': true});
    })
    .catch((code) => {
      res.status(400).json({
        'error': 'Unable to save to the database',
        'code': code
      })
    });
});

// Route for telemetry (just the current throttle setting, for now)
postRoutes.route('/telemetry').get(function(req, res) {
  Post.findOne().sort({_id: -1}).exec(function(err, currentValues) {
    if (err) {
      res.json(err);
    } else {
      // Probably not the best way to do this, but I don't want to send the ID or any other information
      res.json({
        "forward": currentValues.forward,
        "throttle": currentValues.throttle
      });
    }
  });
});

module.exports = postRoutes;