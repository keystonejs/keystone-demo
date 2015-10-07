var _ = require('lodash');

exports.locals = function (req, res, next) {
	if (req.query.theme) {
		res.locals.currentTheme = req.query.theme;
	}
	next();
};

exports.flashMessages = function (req, res, next) {
	var flashMessages = {
		info: req.flash('info'),
		success: req.flash('success'),
		warning: req.flash('warning'),
		error: req.flash('error')
	};
	res.locals.messages = _.any(flashMessages, function(msgs) { return msgs.length }) ? flashMessages : false;
	next();
};
