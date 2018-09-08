var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({
	limit: '50mb',
	extended: true
}));
router.use(bodyParser.json({
	limit: '50mb'
}));

var ArticleCategory = require('./ArticleCategory');

//CREATE
router.post('/', function (req, res) {
    ArticleCategory.create({
        created: new Date(),
        updated: new Date(),
        name: req.body.categoryName
    }, function (err, newCategory) {
        if (err) return res.status(500).send("There was a problem adding the information to the database.");
		res.json(newCategory);
        //res.status(200).send(newCategory);
    });
});

//READ ALL
router.get('/', function (req, res) {
    ArticleCategory.find({}, function (err, foundCategories) {
        if (err) return res.status(500).send("There was a problem finding the article categories.");
        res.json(foundCategories);
        //res.status(200).send(foundCategories);
    })
});

router.get('/index', function (req, res) {
    ArticleCategory.find({}, function (err, articleCategories) {
        if (err) return res.status(500).send("There was a problem finding the article categories.");
        res.status(200).render("kategoriArtikel/index", {articleCategories: articleCategories, page: "index"});
    })
});

//READ ONE
router.get('/:id', function (req, res) {
    ArticleCategory.findById(req.params.id, function (err, articleCategory) {
        if (err) return res.status(500).send("There was a problem finding the article category.");
        if (!articleCategory) return res.status(404).send("No article category found.");
        res.status(200).render("kategoriArtikel/show", {articleCategory: articleCategory, page: "show"});
        //res.status(200).send(articleCategory);
    });
});

//DELETE ONE
router.delete('/:id', function (req, res) {
    ArticleCategory.findByIdAndRemove(req.params.id, function (err, deletedCategory) {
        if (err) return res.status(500).send("There was a problem deleting the article category.");
		res.json(deletedCategory);
        //res.status(200).send("Article category "+ articleCategory.name +" was deleted.");
    });
});

//UPDATE ONE
router.put('/:id', function (req, res) {
	let updatedArticleCategory = {
        updated: new Date(),
		name: req.body.categoryName
	}
    ArticleCategory.findByIdAndUpdate(req.params.id, updatedArticleCategory, {new: true}, function (err, updatedCategory) {
        if (err) return res.status(500).send("There was a problem updating the article category.");
        res.status(200).send(updatedCategory);
    });
});

module.exports = router;