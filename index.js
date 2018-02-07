const express = require('express');
const mongoose = require('mongoose');

const keys = require('./config/keys');

//class Models
require('./models/Post');
require('./models/Comment');

mongoose.connect(keys.mongoURI);

//create instance of express
const app = express();

//routes
require('./routes/postRoutes')(app);

//dynamic port binding
const PORT = process.env.PORT || 5000;
app.listen(PORT);
