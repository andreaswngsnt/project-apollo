const config = require('../config.json')
const mongoose = require('mongoose');
mongoose.connect(config.connectionString);