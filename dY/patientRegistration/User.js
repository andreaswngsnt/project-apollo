var mongoose = require('mongoose');
var UserSchema = new mongoose.Schema({
    created: Date,
    updated: Date,
    m_parties_id: {type: mongoose.Schema.ObjectId, ref: 'm_parties'},
    username: String,
    password: String
});
mongoose.model('d_users', UserSchema);

module.exports = mongoose.model('d_users');