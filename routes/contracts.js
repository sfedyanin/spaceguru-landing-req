var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('contracts', {
		title: 'CONTRATO DE ALQUILER',
		headerType: 'backbg',
		custom: 'custom_height'
	});
});

module.exports = router;
