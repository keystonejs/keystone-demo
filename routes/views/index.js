const keystone = require('keystone');

exports = module.exports = function(req, res) {

	var view = new keystone.View(req, res);

	view.render('index', {
		section: 'home',
		themes: [
			'Bootstrap',
			'Cerulean',
			'Cosmo',
			'Cyborg',
			'Darkly',
			'Flatly',
			'Journal',
			'Lumen',
			'Paper',
			'Readable',
			'Sandstone',
			'Simplex',
			'Slate',
			'Spacelab',
			'Superhero',
			'United',
			'Yeti',
		]
	});

}
