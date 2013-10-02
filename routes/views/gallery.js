var keystone = require('keystone');

exports = module.exports = function(req, res) {
	
	var view = new keystone.View(req, res);
	
	var image = { name: 'Image', src: '/images/scaffolding/300x200.png', caption: 'Image Caption', publishedDate: '2013-08-21' };
	var images = [image, image, image, image, image, image, image, image, image, image, image, image, image, image];
	
	view.render('gallery', {
		section: 'gallery',
		images: images
	});
	
}
