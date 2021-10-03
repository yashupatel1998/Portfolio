var express = require('express');
var router = express.Router();

/* home page. */
router.get('/', function(req, res, next) {
  res.render('partials/home', { title: 'Home'});
});

/* home page. */
router.get('/home', function(req, res, next) {
  res.render('partials/home', { title: 'Home'});
});

/* About Us page. */
router.get('/about', function(req, res, next) {
  res.render('partials/about', { title: 'About'});
});

/* Projects page. */
router.get('/projects', function(req, res, next) {
  res.render('partials/project', { title: 'Projects'});
});

/* GET Services page. */
router.get('/services', function(req, res, next) {
  res.render('partials/service.ejs', { title: 'Services'});
});

/*  Contact Us page. */
router.get('/contact', function(req, res, next) {
  res.render('partials/contact', { title: 'Contact'});
});

module.exports = router;
