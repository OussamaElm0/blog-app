const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true,
  },
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  tags: [String],
  created_at: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('post', postSchema)