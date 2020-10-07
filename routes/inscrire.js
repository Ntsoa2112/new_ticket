var express = require('express');
var router = express.Router();

var bodyParser = require('body-parser')

/* GET home page. */
router.post('/create', function(req, res, next) {
    alert("Bien reçu");
  //res.render('pages/index', { title: 'Express' });
});

module.exports = router;