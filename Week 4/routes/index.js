var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: "Yuichi's Home"});
});

/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('home', { title: "Yuichi's Home"});
});

/* GET About Us page. */
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About'});
});

/* GET Products page. */
router.get('/products', function(req, res, next) {
  res.render('products', { title: 'Products'});
});

/* GET Services page. */
router.get('/services', function(req, res, next) {
  res.render('services', { title: 'Services'});
});

/* GET Contact Us page. */
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact'});
});

/* GET login page. */
router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Login'});
});

module.exports = router;
