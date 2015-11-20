var _ = require('lodash');

exports.theme = function (req, res, next) {
	if (req.query.theme) {
		req.session.theme = req.query.theme;
	}
	res.locals.themes = [
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
	];
	res.locals.currentTheme = req.session.theme || 'Bootstrap';
	next();
};

exports.flashMessages = function (req, res, next) {
	var flashMessages = {
		info: req.flash('info'),
		success: req.flash('success'),
		warning: req.flash('warning'),
		error: req.flash('error')
	};
	res.locals.messages = _.any(flashMessages, function (msgs) { return msgs.length }) ? flashMessages : false;
	next();
};
