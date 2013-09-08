var keystone = require('keystone'),
	Types = keystone.Field.Types;

var Post = new keystone.List('Post', {
	map: { name: 'title' }
});

Post.add({
	title: { type: String, required: true },
	slug: { type: String, index: true },
	state: { type: Types.Select, options: 'draft, published, archived', default: 'draft' },
	author: { type: Types.Relationship, ref: 'User' },
	publishedDate: Date,
	image: { type: Types.CloudinaryImage },
	content: { type: Types.Html, wysiwyg: true },
	categories: { type: Types.Relationship, ref: 'PostCategory', many: true }
});

Post.addPattern('standard meta');
Post.register();
