var keystone = require('keystone'),
	Types = keystone.Field.Types;

var PostCategory = new keystone.List('PostCategory', {
	autokey: { from: 'name', path: 'key' }
});

PostCategory.add({
	name: { type: String, required: true }
});

PostCategory.relationship({ ref: 'Post', path: 'categories' });

PostCategory.track = true;
PostCategory.register();
