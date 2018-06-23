var mongoose = require('mongoose');
var LocationSchema = new mongoose.Schema({
    created: Date,
    updated: Date,
    latitude: String,
    longitude: String,
    latitudeDelta: String,
    longitudeDelta: String,
    description: String
});
mongoose.model('m_locations', LocationSchema);

module.exports = mongoose.model('m_locations');