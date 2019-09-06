const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');
const cors = require('cors');

const app = express();
app.use(express.json());

mongoose.connect("mongodb+srv://romulo:Euteamo456@cluster0-qakuv.mongodb.net/test?retryWrites=true&w=majority", { useNewUrlParser: true });

requireDir('./models');

app.use(cors());
app.use('/api', require('./routes'));

app.listen(process.env.PORT);   