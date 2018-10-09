const mongoose = require('mongoose');
const PartySchema = new mongoose.Schema({
    created: Date,
    updated: Date,
    type: String,
    name : String,
    ICType: String,
    ICNumber: { type: String, unique: true },
    gender: String,
    birthDate: Date,
    address: {
        street: String,
        province: String,
        city: String,
        kecamatan: String,
        kelurahan: String,
        zipcode: String,
        country: String,
        coordinate: String
    },
    contact: {
        phone : String,
        email : { type: String, unique: true }
    },
    occupation: String,
    lastEducation: String,
    picture: String,
    isActive: String,
    maritalStatus: String
});
mongoose.model('m_parties', PartySchema);

module.exports = mongoose.model('m_parties');