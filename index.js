const express = require('express');
const mongoose = require('mongoose');

//class Models
require('./models/Post');
require('./models/Comment');

//create instance of express
const app = express();



//dynamic port binding
const PORT = process.env.PORT || 5000;
app.listen(PORT);
