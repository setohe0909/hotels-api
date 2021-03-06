'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Hotel = require('./models/hotel');
const routes = require('./routes');
const HotelsController = require('./controllers/hotelsController');

// Mongo Setup
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/HotelsDB');

// Express App Setup
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));

// Routes Setup
routes(app);

// DB Data Setup
HotelsController.init();

// Server Setup
app.listen(process.env.PORT || 3000, () => console.log('Hotels API listening on port 3000!'));
