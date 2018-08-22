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

var ArticleTag = require('./ArticleTag');

//CREATE
router.post('/', function (req, res) {
    ArticleTag.create({
        created: new Date(),
        updated: new Date(),
        name: req.body.tagName
    }, function (err, newTag) {
		if (err) return res.status(500).send("There was a problem adding the information to the database.");
		res.json(newTag);
        //res.status(200).send(newTag);
    });
});

//READ ALL
router.get('/', function (req, res) {
	ArticleTag.find({}, function (err, foundTags) {
		if (err) return res.status(500).send("There was a problem finding the article tags.");
		res.json(foundTags);
	})
});

router.get('/index', function (req, res) {
    ArticleTag.find({}, function (err, articleTags) {
        if (err) return res.status(500).send("There was a problem finding the article tags.");
        res.status(200).render("tagArtikel/index", {articleTags: articleTags, page: "index"});
    })
});

//READ ONE
router.get('/:id', function (req, res) {
    ArticleTag.findById(req.params.id, function (err, articleTag) {
        if (err) return res.status(500).send("There was a problem finding the article tag.");
        if (!articleTag) return res.status(404).send("No article tag found.");
        //res.status(200).render("tagArtikel/show", {articleTag: articleTag, page: "show"});
        res.status(200).send(articleTag);
    });
});

//DELETE ONE
router.delete('/:id', function (req, res) {
    ArticleTag.findByIdAndRemove(req.params.id, function (err, deletedTag) {
        if (err) return res.status(500).send("There was a problem deleting the article tag.");
		res.json(deletedTag);
        // res.status(200).send("Article tag "+ articleTag.name +" was deleted.");
    });
});

//UPDATE ONE
router.put('/:id', function (req, res) {
	let updatedArticleTag = {
        updated: new Date(),
		name: req.body.tagName
	}
    ArticleTag.findByIdAndUpdate(req.params.id, updatedArticleTag, {new: true}, function (err, updatedTag) {
        if (err) return res.status(500).send("There was a problem updating the article tag.");
        res.status(200).send(updatedTag);
    });
});

module.exports = router;