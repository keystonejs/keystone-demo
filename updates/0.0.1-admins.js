/**
 * Warning: Users created with this script are protected, and changes to their
 * name, email and password values will be ignored.
 * 
 * If you fork this site, be sure to remove line 21 (isProtected = true) and
 * make changes to the models/users.js file as well.
 */

var keystone = require('keystone'),
	async = require('async'),
	User = keystone.list('User');

var admins = [
	{ email: 'demo@keystonejs.com', password: 'demo', name: { first: 'Demo', last: 'User' } }
];

function createAdmin(admin, done) {
	User.model.findOne({ email: admin.email }).exec(function(err, user) {
		var newAdmin = new User.model(admin);
		newAdmin.isAdmin = true;
		newAdmin.isProtected = true;
		newAdmin.save(function(err) {
			if (err) {
				console.error("Error adding admin " + admin.email + " to the database:");
				console.error(err);
			} else {
				console.log("Added admin " + admin.email + " to the database.");
			}
			done();
		});
	});
}

exports = module.exports = function(done) {
	async.forEach(admins, createAdmin, done);
};