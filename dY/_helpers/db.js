const config = require('../config.json')
const mongoose = require('mongoose');

mongoose.connect(config.connectionString);

mongoose.connection.on('connected', () => {
    console.log('Connected to Database ' + config.connectionString)
});

mongoose.connection.on('error', (err) => {
    console.log('Database error: ' + err)
});