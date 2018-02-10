const mongoose = require('mongoose');
const Path = require('path-parser');

const Post = mongoose.model('posts');

module.exports = app => {
  // Get an index of all the the posts
  app.get('/api/posts', async (req, res) => {
    try {
      const allPosts = await Post.find({});
      res.send(allPosts);
    } catch (err) {
      res.status(422).send(err);
    }
  });

  // Get a single post
  app.get('/api/posts/:postID', async (req, res) => {
    const p = new Path('/api/posts/:postID');
    const match = p.test(req.url);

    const post = await Post.findOne({ _id: match.postID });

    res.send(post);
  });

  //create a new post in the database
  app.post('/api/posts', async (req, res) => {
    const post = new Post({
      title: req.body.title,
      body: req.body.body,
      imageURL: req.body.imageURL,
      videoURL: req.body.videoURL,
      datePosted: req.body.datePosted,
      comments: []
    });

    try {
      await post.save();
      res.send("Success!");
    }
    catch (err) {
      res.status(422).send(err);
    }
  });

  // Delete an existing post
  app.delete('/api/posts/:postID', async (req, res) => {
    const p = new Path('/api/posts/:postID')
    const match = p.test(req.url);

    const post = await Post.findOne({ _id: match.postID })

    try {
      //removes tournament
      Post.findByIdAndRemove(post.id).exec();
      res.send("Post successfully deleted");
    } catch (err) {
      res.status(422).send(err);
    }
  });
}
