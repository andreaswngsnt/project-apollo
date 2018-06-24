var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({extended: true}));
router.use(bodyParser.json());

// Home Routes
router.get("/", function(req, res) {
    res.redirect("/home");
});

router.get("/home", function(req, res) {
    res.render("home");
});

router.get("/daftarpraktik", function(req, res) {
    res.render("daftar");
});

router.get("/tentang", function(req, res) {
    res.render("tentang");
});

// TEMPORARY - REMOVE IF NEEDED
router.get("/login", function(req, res) {
	res.render("login");
});

router.get("/register", function(req, res) {
	res.render("register");
});

router.get("/admin", function(req, res) {
	res.render("dashboard/admin");
});

router.get("/admin/artikel/index", function(req, res) {
	res.render("dashboard/artikel/index");
});

router.get("/admin/artikel/user", function(req, res) {
	res.render("dashboard/artikel/user");
});

router.get("/admin/artikel/new", function(req, res) {
	res.render("dashboard/artikel/new");
});

router.get("/contoh", function(req, res) {
	res.render("artikel/show");
});

module.exports = router;