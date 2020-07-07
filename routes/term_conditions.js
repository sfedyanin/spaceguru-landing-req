var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('terms', {
		title: 'TÉRMINOS Y CONDICIONES',
		headerType: 'backbg',
		custom: 'custom_height'
	});
});

module.exports = router;
