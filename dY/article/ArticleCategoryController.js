var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({extended: true}));
router.use(bodyParser.json());

var ArticleCategory = require('./ArticleCategory');

//CREATE
router.post('/', function (req, res) {
    ArticleCategory.create({
        created: new Date(),
        updated: new Date(),
        name: req.body.name
    },
    function (err, articleCategory) {
        if (err) return res.status(500).send("There was a problem adding the information to the database.");
		
		//TEMPORARY - REMOVE IF NEEDED
		res.redirect('/admin/kategoriArtikel/index');
        //res.status(200).send(articleCategory);
		//EDIT ENDS HERE
    });
});

//READ ALL
// router.get('/', function (req, res) {
//     ArticleCategory.find({}, function (err, articles) {
//         if (err) return res.status(500).send("There was a problem finding the articles.");
//         res.status(200).send(articles);
//     })
// });
router.get('/', function (req, res) {
    ArticleCategory.find({}, function (err, articleCategories) {
        if (err) return res.status(500).send("There was a problem finding the article categories.");
        res.status(200).render("kategoriArtikel/home", {articleCategories: articleCategories, page: "home"});
        //res.status(200).send(articleCategories);
    })
});

router.get('/index', function (req, res) {
    ArticleCategory.find({}, function (err, articleCategories) {
        if (err) return res.status(500).send("There was a problem finding the article categories.");
        res.status(200).render("kategoriArtikel/index", {articleCategories: articleCategories, page: "index"});
    })
});

//READ ONE
// router.get('/:id', function (req, res) {
//     ArticleCategory.findById(req.params.id, function (err, article) {
//         if (err) return res.status(500).send("There was a problem finding the article.");
//         if (!article) return res.status(404).send("No article found.");
//         res.status(200).send(article);
//     });
// });
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
    ArticleCategory.findByIdAndRemove(req.params.id, function (err, articleCategory) {
        if (err) return res.status(500).send("There was a problem deleting the article category.");
        res.status(200).redirect("back");
        //res.status(200).send("Article category "+ articleCategory.name +" was deleted.");
    });
});

//UPDATE ONE
router.put('/:id', function (req, res) {
    ArticleCategory.findByIdAndUpdate(req.params.id, req.body, {new: true}, function (err, articleCategory) {
        if (err) return res.status(500).send("There was a problem updating the article category.");
        res.status(200).redirect("back");
        //res.status(200).send(articleCategory);
    });
});

module.exports = router;