const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const router = require('./routes/api');

const app = express();


//connnet to mongoDB
mongoose.connect('mongodb://localhost/nijiago');
mongoose.Promise = global.Promise;


app.use(express.static('public'));
app.use(bodyParser.json());
app.use('/api', router);
//error handling middleware
app.use((err, req, res, next) => {
    res.status(422).send({error:err.message});
});

app.listen(3000);
