var keystone = require('keystone');

exports = module.exports = function(req, res) {
	
	res.render('site/index', {
		section: 'home'
	});
	
}
