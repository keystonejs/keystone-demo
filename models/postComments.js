var keystone = require('keystone'),
	Types = keystone.Field.Types;

/** 
	Posts
	=====
 */

var PostComment = new keystone.List('PostComment', {
	label: 'Comments',
	singular: 'Comment'
});

PostComment.add({
	author: { type: Types.Relationship, initial: true, ref: 'User', index: true },
	post: { type: Types.Relationship, initial: true, ref: 'Post', index: true },
	commentState: { type: Types.Select, options: ['published', 'draft', 'archived'], default: 'published', index: true },
	publishedOn: { type: Types.Date, default: Date.now, noedit: true, index: true }
});

PostComment.add('Content', {
	content: { type: Types.Html, wysiwyg: true, height: 300 }
});





/** 
	Methods
	=======
*/

PostComment.schema.pre('save', function(next) {
	
	this.wasNew = this.isNew;
	
	if (!this.isModified('publishedOn') && this.isModified('commentState') && this.commentState == 'published') {
		this.publishedOn = new Date();
	}
	
	next();
	
});

PostComment.schema.post('save', function() {
	
	if (!this.wasNew) {
		return;
	}
	
	if (this.author) {
		keystone.list('User').model.findById(this.author).exec(function(err, user) {
			return user && user.wasActive().save();
		});
	}
	
});


/** 
	Registration
	============
*/

PostComment.track = true;
PostComment.defaultColumns = 'author, post, publishedOn, commentState';
PostComment.register();
