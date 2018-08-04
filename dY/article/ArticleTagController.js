var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({extended: true}));
router.use(bodyParser.json());

var ArticleTag = require('./ArticleTag');

//CREATE
router.post('/', function (req, res) {
    ArticleTag.create({
        created: new Date(),
        updated: new Date(),
        name: req.body.name
    },
    function (err, articleTag) {
        if (err) return res.status(500).send("There was a problem adding the information to the database.");
		
		//TEMPORARY - REMOVE IF NEEDED
		//res.redirect('/admin/tagArtikel/index');
        res.status(200).send(articleTag);
		//EDIT ENDS HERE
    });
});

//READ ALL
// router.get('/', function (req, res) {
//     ArticleTag.find({}, function (err, articles) {
//         if (err) return res.status(500).send("There was a problem finding the articles.");
//         res.status(200).send(articles);
//     })
// });
router.get('/', function (req, res) {
    ArticleTag.find({}, function (err, articleTags) {
        if (err) return res.status(500).send("There was a problem finding the article tags.");
        //res.status(200).render("tagArtikel/home", {articleTags: articleTags, page: "home"});
        res.status(200).send(articleTags);
    })
});

router.get('/index', function (req, res) {
    ArticleTag.find({}, function (err, articleTags) {
        if (err) return res.status(500).send("There was a problem finding the article tags.");
        res.status(200).render("tagArtikel/index", {articleTags: articleTags, page: "index"});
    })
});

//READ ONE
// router.get('/:id', function (req, res) {
//     ArticleTag.findById(req.params.id, function (err, article) {
//         if (err) return res.status(500).send("There was a problem finding the article.");
//         if (!article) return res.status(404).send("No article found.");
//         res.status(200).send(article);
//     });
// });
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
    ArticleTag.findByIdAndRemove(req.params.id, function (err, articleTag) {
        if (err) return res.status(500).send("There was a problem deleting the article tag.");
        //res.status(200).redirect("back");
        res.status(200).send("Article tag "+ articleTag.name +" was deleted.");
    });
});

//UPDATE ONE
router.put('/:id', function (req, res) {
    ArticleTag.findByIdAndUpdate(req.params.id, req.body, {new: true}, function (err, articleTag) {
        if (err) return res.status(500).send("There was a problem updating the article tag.");
        //res.status(200).redirect("back");
        res.status(200).send(articleTag);
    });
});

module.exports = router;