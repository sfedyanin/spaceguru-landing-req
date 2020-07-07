var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('politics', {
		title: 'POLÍTICA DE PRIVACIDAD Y SEGURIDAD',
		headerType: 'backbg',
		custom: 'custom_height'
	});
});

module.exports = router;
