var mongoose = require('mongoose');
var ArticleTagSchema = new mongoose.Schema({
    created: Date,
    updated: Date,
    name: String
});
mongoose.model('l_article_tags', ArticleTagSchema);

module.exports = mongoose.model('l_article_tags');