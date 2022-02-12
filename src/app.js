const express = require('express');
const checkinRoute = require('./routes/checkin')
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/check-in', checkinRoute);

module.exports = app;
