const express = require('express');
const bodyParser = require('body-parser');
const router = require('./routes/api');

const app = express();

app.use(bodyParser.json());
app.use('/api',router);

app.listen(3000);
