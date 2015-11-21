var _ = require('lodash');
var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Users
 * =====
 */

var User = new keystone.List('User', {
	// use nodelete to prevent people from deleting the demo admin user
	nodelete: true,
});

User.add({
	name: { type: Types.Name, required: true, index: true },
	email: { type: Types.Email, initial: true, required: true, index: true },
	phone: { type: String, width: 'short' },
	photo: { type: Types.CloudinaryImage, collapse: true },
	password: { type: Types.Password, initial: true, required: false },
}, 'Permissions', {
	isProtected: { type: Boolean, noedit: true, hidden: true },
});

// Provide access to Keystone
User.schema.virtual('canAccessKeystone').get(function() {
	return true;
});


/**
 * Relationships
 */

User.relationship({ ref: 'Post', path: 'author' });


/**
	Methods
	=======
*/

User.schema.methods.wasActive = function () {
	this.lastActiveOn = new Date();
	return this;
}


/**
 * PROTECTING THE DEMO USER
 * The following hooks prevent anyone from editing the main demo user itself,
 * and breaking access to the website cms.
 */

function protect (path) {
	var user = this;
	User.schema.path(path).set(function(value) {
		return (user.isProtected) ? user.get(path) : value;
	});
}

_.each(['name.first', 'name.last', 'email'], protect);

User.schema.path('password').set(function (value) {
	return (this.isProtected) ? '$2a$10$b4vkksMQaQwKKlSQSfxRwO/9JI7Fclw6SKMv92qfaNJB9PlclaONK' : value;
});


/**
 * Registration
 */

User.track = true;
User.defaultColumns = 'name, email, phone, photo';
User.register();
