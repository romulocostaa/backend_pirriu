const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

const app = express();
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/pirriu", { useNewUrlParser: true });

requireDir('./models');

app.use('/api', require('./routes'));

app.listen(3002);