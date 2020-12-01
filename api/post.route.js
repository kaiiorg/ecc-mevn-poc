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
  Post.find(function(err, currentValues) {
    if (err) {
      res.json(err);
    } else {
      res.json(currentValues);
    }
  });
});

module.exports = postRoutes;