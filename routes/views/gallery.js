var keystone = require('keystone');

exports = module.exports = function(req, res) {
	
	var view = new keystone.View(req, res),
		locals = res.locals;
	
	locals.section = 'gallery';
	
	view.query('galleries', keystone.list('Gallery').model.find().sort('sortOrder'));
	
	view.render('gallery');
	
}
