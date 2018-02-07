const mongoose = require('mongoose');
const { Schema } = mongoose;

//Post Schema
const postSchema = new Schema({
  title: String,
  body: String,
  imageURL: String,
  videoURL: String,
  datePosted: Date,
  comments: [String]
});

mongoose.model('posts', postSchema);
