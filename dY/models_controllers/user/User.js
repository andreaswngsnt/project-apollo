const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
    created: Date,
    updated: Date,
    m_parties_id: { type: mongoose.Schema.Types.ObjectId, ref: 'm_parties', required: [true, 'No party found'] },
    username: { type: String, unique: true, required: true },
    hash: { type: String, required: true }
});
mongoose.model('d_users', UserSchema);

module.exports = mongoose.model('d_users');