var mongoose = require('mongoose');
var ArticleCategorySchema = new mongoose.Schema({
    created: Date,
    updated: Date,
    name: String
});
mongoose.model('l_article_categories', ArticleCategorySchema);

module.exports = mongoose.model('l_article_categories');