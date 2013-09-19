var keystone = require('keystone');

keystone.pre('routes', function(req, res, next) {
	
	next();
	
});

exports = module.exports = function(req, res) {
	
	var view = new keystone.View(req, res);
	
	view.render('docs/getting-started', {
		section: 'getting-started'
	});
	
}
