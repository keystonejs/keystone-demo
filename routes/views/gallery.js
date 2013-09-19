var keystone = require('keystone');

exports = module.exports = function(req, res) {
	
	var view = new keystone.View(req, res);
	
	var image = { name: 'Fun in the sun', src: '/images/scaffolding/300x200.png', caption: 'Early morning yoga, praise the sunrise', publishedDate: '2013-08-21' };
	var images = [image, image, image, image, image, image, image, image, image, image, image, image, image, image];
	
	view.render('gallery', {
		section: 'gallery',
		images: images
	});
	
}
