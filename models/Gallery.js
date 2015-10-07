const keystone = require('keystone');
const Types = keystone.Field.Types;

var Gallery = new keystone.List('Gallery', {
	autokey: { from: 'name', path: 'key' }
});

Gallery.add({
	name: { type: String, required: true },
	publishedDate: { type: Date, default: Date.now },
	images: { type: Types.CloudinaryImages }
});

Gallery.track = true;
Gallery.register();
