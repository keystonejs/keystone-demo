var keystone = require('keystone');

/**
 * Application Initialisation
 */

keystone.init({
	
	'name': 'Keystone Demo',
	'brand': 'Keystone Demo',
	
	'favicon': 'public/favicon.ico',
	'less': 'public',
	'static': 'public',
	
	'views': 'templates/views',
	'view engine': 'jade',
	
	'auto update': true,
	'mongo': process.env.MONGOLAB_URI || 'mongodb://localhost/keystone-demo',
	
	'session': true,
	'auth': true,
	'user model': 'User',
	'cookie secret': process.env.COOKIE_SECRET || 'demo'
	
});

require('./models');

keystone.set('locals', {
	_: require('underscore'),
	env: keystone.get('env'),
	ga: process.env.GA_PROPERTY,
	utils: keystone.utils
});

keystone.set('routes', require('./routes'));

keystone.set('nav', {
	'posts': ['posts', 'post-categories'],
	'users': 'users',
	'field-tests': 'things'
});
	
keystone.start();
