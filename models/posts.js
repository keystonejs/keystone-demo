var keystone = require('keystone'),
	Types = keystone.Field.Types;

var Post = new keystone.List('Post', {
	map: { name: 'title' }
});

Post.add({
	title: { type: String, required: true },
	slug: { type: String, index: true },
	state: { type: Types.Select, options: 'draft, published, archived', default: 'draft', index: true },
	author: { type: Types.Relationship, ref: 'User', index: true },
	publishedDate: { type: Types.Date, index: true },
	image: { type: Types.CloudinaryImage, index: true },
	content: {
		brief: { type: Types.Html, wysiwyg: true, height: 150 },
		extended: { type: Types.Html, wysiwyg: true, height: 400 }
	},
	categories: { type: Types.Relationship, ref: 'PostCategory', many: true }
});

Post.schema.virtual('content.full').get(function() {
	return this.content.extended || this.content.brief;
});

Post.schema.methods.getUniqueSlug = function(src, excludeId, callback) {
	
	var q = Post.model.find({ slug: src }),
		post = this;
	
	if (excludeId) {
		q.where('_id').ne(excludeId);
	}
	
	q.exec(function(err, results) {
		if (err) {
			callback(err);
		} else if (results.length) {
			var inc = src.match(/^(.+)\-(\d+)$/);
			if (inc.length == 3) {
				src = inc[1];
				inc = '-' + (parseInt(inc[2]) + 1);
			} else {
				inc = '-1';
			}
			post.getUniqueSlug(src + inc, excludeId, callback);
		} else {
			callback(null, src);
		}
	});
	
}

Post.schema.pre('save', function(next) {
	
	if (!this.slug) {
		this.slug = keystone.utils.slug(this.title);
	}
	
	if (this.isModified('slug')) {
		this.getUniqueSlug(this.slug, this.id, function(err, slug) {
			if (err) {
				next(err);
			} else {
				this.slug = slug;
				next();
			}
		});
	} else {
		next();
	}
	
});

Post.addPattern('standard meta');
Post.defaultColumns = 'title, state|20%, author|20%, publishedDate|20%';
Post.register();
