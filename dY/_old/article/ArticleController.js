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

var Article = require('./Article');
var ArticleCategory = require('./ArticleCategory');
var ArticleTag = require('./ArticleTag');

//CREATE
router.post('/', function (req, res) {	
	let newArticle = {
		created: new Date(),
        updated: new Date(),
        // d_authors_id: req.body.d_authors_id,
        l_article_categories_id: req.body.l_article_categories_id,
        l_article_tags_id: [],
        title: req.body.title,
        body: req.body.body,
        pictures: req.body.pictures,
        description: req.body.description
	}
	
	Article.create(newArticle, function (err, postedArticle) {
		if (err) {
			return res.status(500).send(err)
		} else {
			let tagNamesArray = req.body.l_article_tags_id.split(",");
			for(let i = 0; i < tagNamesArray.length; i ++) {
				ArticleTag.find({name: tagNamesArray[i]}, function(err, foundTag) {
					if (foundTag[0] == null) {
						ArticleTag.create({
							name: tagNamesArray[i],
							created: new Date(),
							updated: new Date()
						}, function(err, newTag) {
							postedArticle.l_article_tags_id.push(newTag);
							saveChanges();
						});
					} else {
						postedArticle.l_article_tags_id.push(foundTag[0]);
						saveChanges();
					}
					
					function saveChanges() {
						if(postedArticle.l_article_tags_id.length == tagNamesArray.length) {
							postedArticle.save(function(err){
								if (err) res.status(500).send(err);
								//res.redirect('/admin/artikel/index');
								res.status(200).send(postedArticle);
							});
						}
					}
				});
			}
		}
	});
});

//READ ALL
router.get('/', function (req, res) {
    Article.find({}).populate("l_article_tags_id").populate("l_article_categories_id").exec(function (err, foundArticles) {
        if (err) return res.status(500).send("There was a problem finding the articles.");
		ArticleCategory.find({}, function(err, foundCategories) {
			if (err) return res.status(500).send("There was a problem finding the article category.");
			res.status(200).render("artikel/home", {articles: foundArticles, categories: foundCategories, category: "home"});
			//res.status(200).send(articles);
		});
    });
});

router.get('/index', function (req, res) {
    Article.find({}).populate("l_article_tags_id").populate("l_article_categories_id").exec(function (err, foundArticles) {
        if (err) return res.status(500).send("There was a problem finding the articles.");
		ArticleCategory.find({}, function(err, foundCategories) {
			if (err) return res.status(500).send("There was a problem finding the article category.");
			res.status(200).render("artikel/index", {articles: foundArticles, categories: foundCategories, category: "index"});
			//res.status(200).send(articles);
		});
    });
});


// SHOW ARTICLES WITH A PARTICULAR TAG
router.get('/tags/:tag', function (req, res) {
    Article.find({l_article_tags_id: req.params.tag}).populate("l_article_tags_id").populate("l_article_categories_id").exec(function (err, foundArticles) {
        if (err) return res.status(500).send("There was a problem finding the articles.");
		ArticleCategory.find({}, function(err, foundCategories) {
			if (err) return res.status(500).send("There was a problem finding the article category.");
			ArticleTag.find({_id: req.params.tag}, function(err, foundTag) {
				if (err) return res.status(500).send("There was a problem finding the article tag.");
				res.status(200).render("artikel/index", {articles: foundArticles, categories: foundCategories, tag: foundTag});
				//res.status(200).send(articles);
			});
		});
    });
});


// SHOW ARTICLES WITH A PARTICULAR CATEGORY
router.get('/categories/:category', function (req, res) {
    Article.find({l_article_categories_id: req.params.category}).populate("l_article_tags_id").populate("l_article_categories_id").exec(function (err, foundArticles) {
        if (err) return res.status(500).send("There was a problem finding the articles.");
		ArticleCategory.find({}, function(err, foundCategories) {
			if (err) return res.status(500).send("There was a problem finding the article category.");
			res.status(200).render("artikel/index", {articles: foundArticles, categories: foundCategories, category: req.params.category});
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
	let updatedArticle = {
        updated: new Date(),
        // d_authors_id: req.body.d_authors_id,
        l_article_categories_id: req.body.l_article_categories_id,
        l_article_tags_id: [],
        title: req.body.title,
        body: req.body.body,
        pictures: req.body.pictures,
        description: req.body.description
	}
	
    Article.findByIdAndUpdate(req.params.id, updatedArticle, {new: true}, function (err, article) {
        if (err) {
			return res.status(500).send("There was a problem updating the article.")
		} else {
			let tagNamesArray = req.body.l_article_tags_id.split(",");
			for(let i = 0; i < tagNamesArray.length; i ++) {
				ArticleTag.find({name: tagNamesArray[i]}, function(err, foundTag) {
					if (foundTag[0] == null) {
						ArticleTag.create({
							name: tagNamesArray[i],
							created: new Date(),
							updated: new Date()
						}, function(err, newTag) {
							article.l_article_tags_id.push(newTag);
							saveChanges();
						});
					} else {
						article.l_article_tags_id.push(foundTag[0]);
						saveChanges();
					}
					
					function saveChanges() {
						if(article.l_article_tags_id.length == tagNamesArray.length) {
							article.save(function(err){
								if (err) res.status(500).send(err);
								//res.redirect('/admin/artikel/index');
								res.status(200).send(article);
							});
						}
					}
				});
			}
		}
    });
});

module.exports = router;