const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// collection and schema for post requests
let Post = new Schema({
    forward: {
      type: Boolean
    },
    throttle: {
      type: Number
    }
  }, {
    collection: 'current_values'
  });

module.exports = mongoose.model('Post', Post);