const mongoose = require('mongoose');

const DB_HOST = process.env.DB_HOST || 'localhost';
const DB_PORT = process.env.DB_PORT || 27017;
const DB_NAME = process.env.DB_NAME || 'checkinDB';

mongoose.connect(`mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`)
    .catch((err) => {
        console.error('Connection to db failed: ', err);
        process.exit(1);
    });

mongoose.connection.on('error', err => console.error('Connection error: ', err));
mongoose.connection.on('connected', () => console.info('Connected to db'));
