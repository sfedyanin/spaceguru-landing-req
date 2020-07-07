var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('storage', {
		title: 'GUÍA DE ALMACENAMIENTO',
		headerType: 'backbg'
	});
});

module.exports = router;
