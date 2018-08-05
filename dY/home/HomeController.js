var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({extended: true}));
router.use(bodyParser.json());


var Article = require('../article/Article');
var ArticleCategory = require('../article/ArticleCategory');
var User = require('../patientRegistration/User');


// Home Routes
router.get("/", function(req, res) {
    res.redirect("/home");
});

router.get("/home", function(req, res) {
	Article.find({}).populate("l_article_tags_id").populate("l_article_categories_id").exec(function (err, foundArticles) {
        if (err) return res.status(500).send("There was a problem finding the articles.");
		res.status(200).render("home", {articles: foundArticles, page: "home"});
    });
});

router.get("/daftarpraktik", function(req, res) {
    res.render("daftar");
});

router.get("/tentang", function(req, res) {
    res.render("tentang");
});


router.get("/login", function(req, res) {
	res.render("login");
});

router.get("/register", function(req, res) {
	res.render("register");
});


// Admin Routes
router.get("/admin", function(req, res) {
	res.render("dashboard/admin");
});

router.get('/admin/artikel/index', function (req, res) {
    Article.find({}).populate("l_article_tags_id").populate("l_article_categories_id").exec(function (err, articles) {
        if (err) return res.status(500).send("There was a problem finding the articles.");
		ArticleCategory.find({}, function (err, categories) {
			if (err) return res.status(500).send("There was a problem finding the article categories.");
			res.status(200).render("dashboard/artikel/index", {articles: articles, categories: categories, page: "index"});
		});
    });
});

router.get('/admin/artikel/user', function (req, res) {
    Article.find({}).populate("l_article_tags_id").populate("l_article_categories_id").exec(function (err, articles) {
        if (err) return res.status(500).send("There was a problem finding the articles.");
		res.status(200).render("dashboard/artikel/user", {articles: articles, page: "index"});
    });
});

router.get('/admin/artikel/:id/edit', function (req, res) {
    Article.findById(req.params.id, function (err, article) {
        if (err) return res.status(500).send("There was a problem finding the article.");
        if (!article) return res.status(404).send("No article found.");
        res.status(200).render("dashboard/artikel/edit", {article: article});
    });
});

router.get("/admin/artikel/new", function(req, res) {
	res.render("dashboard/artikel/new");
});

router.get('/admin/pengguna/index', function (req, res) {
	User.find({}, function (err, users) {
        if (err) return res.status(500).send("There was a problem finding the users.");
        res.status(200).render("dashboard/pengguna/index", {users: users, page: "index"});
    })
});

router.get('/admin/pengguna/dokter', function (req, res) {
	res.render("dashboard/pengguna/dokter");
});

router.get('/admin/pengguna/pasien', function (req, res) {
	res.render("dashboard/pengguna/pasien");
});

router.get('/admin/pengguna/admin', function (req, res) {
	res.render("dashboard/pengguna/admin");
});

router.get('/admin/pengguna/id', function (req, res) {
	res.render("dashboard/pengguna/show");
});

router.get('/admin/pengguna/new', function (req, res) {
	res.render("dashboard/pengguna/new");
});

router.get("/contoh", function(req, res) {
	res.render("artikel/contoh");
});


module.exports = router;