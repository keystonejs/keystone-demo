var keystone = require('keystone');

exports = module.exports = function(req, res) {

	var view = new keystone.View(req, res),
		locals = res.locals;
	
	locals.version = require('../../package.json').dependencies.keystone.substring(1);

	view.render('index', {
		section: 'home'
	});
	
}
