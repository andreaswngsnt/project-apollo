var mongoose = require('mongoose');
var ArticleSchema = new mongoose.Schema({
    created: Date,
    updated: Date,
    // d_authors_id: { type: mongoose.Schema.Types.ObjectId, ref: 'd_authors', required: [true, 'No author id found'] },
    l_article_categories_id: { type: mongoose.Schema.Types.ObjectId, ref: 'l_article_categories', required: [true, 'No category id found'] },
    l_article_tags_id: [{ type: mongoose.Schema.Types.ObjectId, ref: 'l_article_tags', required: [true, 'No tag id found'] }],
    title: String,
    body: String,
    //pictures: [String],
    picture: String,
    description: String
});
mongoose.model('m_articles', ArticleSchema);

module.exports = mongoose.model('m_articles');