const mongoose = require('mongoose');
const { Schema } = mongoose;

//Comment Schema
const commentSchema = new Schema({
  body: String,
  datePosted: Date,
});

mongoose.model('comments', commentSchema);
