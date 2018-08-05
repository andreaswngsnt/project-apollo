var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({extended: true}));
router.use(bodyParser.json());

var Article = require('./Article');
var ArticleCategory = require('./ArticleCategory');

//CREATE
router.post('/', function (req, res) {
    Article.create({
        created: new Date(),
        updated: new Date(),
        d_authors_id: req.body.d_authors_id,
        l_article_categories_id: req.body.l_article_categories_id,
        l_article_tags_id: req.body.l_article_tags_id,
        title: req.body.title,
        body: req.body.body,
        pictures: req.body.pictures,
        description: req.body.description
    },
    function (err, article) {
        if (err) return res.status(500).send("There was a problem adding the information to the database.");
		
		//TEMPORARY - REMOVE IF NEEDED
		//res.redirect('/admin/artikel/index');
        res.status(200).send(article);
		// EDIT ENDS HERE
    });
});

//READ ALL
router.get('/', function (req, res) {
    Article.find({}).populate("l_article_tags_id").populate("l_article_categories_id").exec(function (err, foundArticles) {
        if (err) return res.status(500).send("There was a problem finding the articles.");
		ArticleCategory.find({}, function(err, foundCategories) {
			if (err) return res.status(500).send("There was a problem finding the article category.");
			res.status(200).render("artikel/home", {articles: foundArticles, categories: foundCategories, page: "home"});
			//res.status(200).send(articles);
		});
    });
});

router.get('/index', function (req, res) {
    Article.find({}).populate("l_article_tags_id").populate("l_article_categories_id").exec(function (err, foundArticles) {
        if (err) return res.status(500).send("There was a problem finding the articles.");
		ArticleCategory.find({}, function(err, foundCategories) {
			if (err) return res.status(500).send("There was a problem finding the article category.");
			res.status(200).render("artikel/index", {articles: foundArticles, categories: foundCategories, page: "index"});
			//res.status(200).send(articles);
		});
    });
});

//READ ONE
router.get('/:id', function (req, res) {
    Article.findById(req.params.id).populate("l_article_tags_id").populate("l_article_categories_id").exec(function (err, foundArticle) {
        if (err) return res.status(500).send("There was a problem finding the article.");
        if (!foundArticle) return res.status(404).send("No article found.");
		// res.status(200).send(foundArticle + " " + foundCategory);
		res.status(200).render("artikel/show", {article: foundArticle, page: "show"});
    });
});

//DELETE ONE
router.delete('/:id', function (req, res) {
    Article.findByIdAndRemove(req.params.id, function (err, article) {
        if (err) return res.status(500).send("There was a problem deleting the article.");
        //res.status(200).redirect("back");
        res.status(200).send("Article "+ article.title +" was deleted.");
    });
});

//UPDATE ONE
router.put('/:id', function (req, res) {
    Article.findByIdAndUpdate(req.params.id, req.body, {new: true}, function (err, article) {
        if (err) return res.status(500).send("There was a problem updating the article.");
        //res.status(200).redirect("back");
        res.status(200).send(article);
    });
});

module.exports = router;