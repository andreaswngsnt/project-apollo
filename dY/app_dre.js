// Imports
var express = require("express"),
	app = express();

// Default Settings
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

// Home Routes
app.get("/", function(req, res) {
	res.redirect("/home");
});

app.get("/home", function(req, res) {
    res.render("home");
});

// Article Routes
app.get("/artikel", function(req, res) {
	res.render("artikel/home");
});

app.get("/artikel/index", function(req, res) {
    res.render("artikel/index");
});

app.get("/artikel/id", function(req, res) {
    res.render("artikel/show");
});

// Feature Routes
app.get("/tentang", function(req, res) {
	res.render("tentang");
});


// Practice Routes
app.get("/daftarpraktik", function(req, res) {
	res.render("daftar");
});


// Login Routes
app.get("/login", function(req, res) {
    res.render("login");
});

// Login Routes
app.get("/register", function(req, res) {
    res.render("register");
});

// Admin Routes
app.get("/admin", function(req, res) {
    res.render("dashboard/admin");
});


app.get("/admin/artikel/new", function(req, res) {
    res.render("dashboard/artikel/new");
});

// Server Listen
app.listen(process.env.PORT, process.env.IP, function() {
	console.log("The server is now running...");
});