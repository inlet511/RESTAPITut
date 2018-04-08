import { mongo } from 'mongoose';

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const router = require('./routes/api');

const app = express();


//connnet to mongoDB
mongoose.connect('mongodb://localhost/nijiago');
mongoose.Promise = global.Promise;

app.use(bodyParser.json());
app.use('/api',router);

app.listen(3000);
