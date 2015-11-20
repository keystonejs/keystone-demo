var keystone = require('keystone');
var Gallery = keystone.list('Gallery');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	locals.section = 'gallery';

	view.query('galleries', Gallery.model.find().sort('sortOrder'));

	view.render('gallery');

}
