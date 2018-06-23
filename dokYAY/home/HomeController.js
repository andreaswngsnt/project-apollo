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

module.exports = router;