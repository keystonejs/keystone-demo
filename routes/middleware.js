exports.locals = function(req, res, next) {
	var locals = res.locals;

	if (req.query.theme) {
		locals.currentTheme = req.query.theme;
	}

	// res.render(req.path);

	next();
};
