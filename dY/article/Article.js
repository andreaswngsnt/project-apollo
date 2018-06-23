var mongoose = require('mongoose');
var ArticleSchema = new mongoose.Schema({
    created: Date,
    updated: Date,
    author: String,
    title: String,
    body: String
});
mongoose.model('m_articles', ArticleSchema);

module.exports = mongoose.model('m_articles');