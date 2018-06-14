// Models
require('./models/User');

const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
require('./services/passport');

mongoose.connect(keys.mongoURI);

const app = express();

require('./routes/authRoutes')(app); // valid because authRoutes returns a function and app is the argument

const PORT = process.env.PORT || 5000;
app.listen(PORT);
