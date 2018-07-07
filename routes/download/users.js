var keystone = require('keystone');
var csv = require('csv');
var User = keystone.list("User");

exports = module.exports = function (req, res) {
	User.model.find(function (err, results) {
		if (err) { throw err; }

		var users = results.map(function (user) {
			return {
				firstName: user.name.first,
				lastName: user.name.last
			};
		});

		csv.stringify(users, { header: 1 } , function (err2, data) {
			if (err2) { throw err; }

			res.set({"Content-Disposition": "attachment; filename=\"users.csv\""});
			res.send(data);
		});
	});
};
