var keystone = require('keystone'),
	Types = keystone.Field.Types;

var Everything = new keystone.List('Everything', {
	label: 'Everything',
	singular: 'Thing'
});

Everything.add(
   'Simple Fields', {
	name: { type: String },
	requiredString: { type: String, required: true, initial: true, note: 'This field is required.' },
	defaultString: { type: String, default: 'Default Value' },
	shortString: { type: String, width: 'short' },
	mediumString: { type: String, width: 'medium' },
	longString: { type: String, width: 'long' },
	textarea: { type: Types.Textarea },
	key: { type: Types.Key },
	email: { type: Types.Email },
	url: { type: Types.Url },
	number: { type: Types.Number },
	money: { type: Types.Money },
	checkbox: { type: Boolean },
	date: { type: Types.Date },
	dateTime: { type: Date },
	html: { type: Types.Html }
}, 'Complex Fields', {
	wysiwygHtml: { type: Types.Html, wysiwyg: true },
	select: { type: Types.Select, options: 'first, second, third' },
	customSelect: { type: Types.Select, options: [
		{ label: 'Option 1', value: 'one' },
		{ label: 'Option 2', value: 'two' },
		{ label: 'Option 3', value: 'three' }
	] },
	numericSelect: { type: Types.Select, numeric: true, options: [
		{ label: 'Number 1', value: 1 },
		{ label: 'Number 2', value: 2 },
		{ label: 'Number 3', value: 3 }
	] },
	splitName: { type: Types.Name },
	password: { type: Types.Password },
	cloudinaryImage: { type: Types.CloudinaryImage },
	location: { type: Types.Location }
}, 'Relationships', {
	user: { type: Types.Relationship, ref: 'User' },
	users: { type: Types.Relationship, ref: 'User', many: true }
}, 'Uneditable Fields', {
	uneditableString: { type: String, noedit: true, default: "Not editable" },
	uneditableCheckbox: { type: Boolean, noedit: true, default: true }
});

// Provide access to Keystone
Everything.schema.virtual('canAccessKeystone').get(function() {
	return this.isAdmin;
});

Everything.addPattern('standard meta');
Everything.register();
