const express = require('express');
const checkinRoute = require('./routes/checkin')
const app = express();

app.use('/check-in', checkinRoute);

module.exports = app;
