var mongoose = require('mongoose');
var PatientSchema = new mongoose.Schema({
    created: Date,
    updated: Date,
    description: String,
    m_parties_id: {type: mongoose.Schema.ObjectId, ref: 'm_parties'}
});
mongoose.model('d_patients', PatientSchema);

module.exports = mongoose.model('d_patients');