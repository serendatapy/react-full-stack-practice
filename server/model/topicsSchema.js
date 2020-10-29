const { mongo } = require('mongoose');
const mongoose = require('mongoose');

const topicSchema = new mongoose.Schema({
  title: String,
  published_at: {type: Date, default: Date.now },
  score: {type: Number, default: 0}
});

const Topic = mongoose.model('Topics',topicSchema);

module.exports = Topic;
