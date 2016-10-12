var keystone = require('keystone');
var Types = keystone.Field.Types;

var User = new keystone.List('User', {
	// nodelete prevents people deleting the demo admin user
	nodelete: true,
});

User.add({
	name: { type: Types.Name, required: true, index: true },
	email: { type: Types.Email, initial: true, required: true, index: true, unique: true },
	phone: { type: String, width: 'short' },
	photo: { type: Types.CloudinaryImage, collapse: true },
	password: { type: Types.Password, initial: true, required: false },
}, 'Permissions', {
	isProtected: { type: Boolean, noedit: true },
});

// Provide access to Keystone
User.schema.virtual('canAccessKeystone').get(function () {
	return true;
});

User.relationship({ ref: 'Post', path: 'posts', refPath: 'author' });

User.schema.methods.wasActive = function () {
	this.lastActiveOn = new Date();
	return this;
}

/**
 * DEMO USER PROTECTION
 * The following code prevents anyone updating the default admin user
 * and breaking access to the demo
 */

function protect (path) {
	User.schema.path(path).set(function (value) {
		return (this.isProtected && this.get(path)) ? this.get(path) : value;
	});
}

['name.first', 'name.last', 'email', 'password', 'isProtected'].forEach(protect);

/**
 * END DEMO USER PROTECTION
 */

User.track = true;
User.defaultColumns = 'name, email, phone, photo';
User.register();
