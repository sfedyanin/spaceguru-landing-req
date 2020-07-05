var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('guardado', { 
		title: 'Seguro de guardado',
		headerType: 'backbg'
	});
});

module.exports = router;
