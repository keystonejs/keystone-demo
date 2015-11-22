var keystone = require('keystone');
var Types = keystone.Field.Types;

var Thing = new keystone.List('Thing', {
	label: 'All Fields',
	singular: 'Thing',
	plural: 'Things',
	autokey: { from: 'name', path: 'autokey', unique: true },
});

Thing.add(
	'Simple Fields', {
	name: { type: String },
	requiredString: { type: String, required: true, initial: true, note: 'This field is required.' },
	defaultString: { type: String, default: 'Default Value' },
	shortString: { type: String, width: 'small' },
	mediumString: { type: String, width: 'medium' },
	longString: { type: String, width: 'large' },
	textarea: { type: Types.Textarea, initial: true },
	key: { type: Types.Key },
	email: { type: Types.Email },
	url: { type: Types.Url },
	number: { type: Types.Number },
	money: { type: Types.Money },
	checkbox: { type: Boolean, initial: true },
	date: { type: Types.Date },
	dateTime: { type: Date },
	html: { type: Types.Html },
}, 'Complex Fields', {
	select: { type: Types.Select, options: 'first, second, third', initial: true },
	indentedCheckbox: { type: Boolean, initial: true, indent: true, note: 'This checkbox is indented' },
	customSelect: { type: Types.Select, options: [
		{ label: 'Option 1', value: 'one' },
		{ label: 'Option 2', value: 'two' },
		{ label: 'Option 3', value: 'three' },
	] },
	numericSelect: { type: Types.Select, numeric: true, options: [
		{ label: 'Number 1', value: 1 },
		{ label: 'Number 2', value: 2 },
		{ label: 'Number 3', value: 3 },
	] },
	splitName: { type: Types.Name, initial: true },
	password: { type: Types.Password, initial: true },
	cloudinaryImage: { type: Types.CloudinaryImage },
	cloudinaryImages: { type: Types.CloudinaryImages },
	location: { type: Types.Location },
	wysiwygHtml: { type: Types.Html, wysiwyg: true },
	shortWysiwygField: { type: Types.Html, wysiwyg: true, height: 100 },
	//embedSrc: { type: String },
	//embedData: { type: Types.Embedly, from: 'embedSrc' },
}, 'Dependent Fields', {
	otherSelect: { type: Types.Select, options: [
		{ label: 'Pre-defined Value', value: 'predefined' },
		{ label: 'Other Value', value: 'other' },
	]},
	otherValue: { type: String, dependsOn: { otherSelect: 'other' } }
}, 'Relationships', {
	user: { type: Types.Relationship, ref: 'User', initial: true },
	users: { type: Types.Relationship, ref: 'User', many: true },
	nested: {
		posts: { type: Types.Relationship, ref: 'Post' },
	},
}, 'Uneditable Fields', {
	uneditableString: { type: String, noedit: true, default: "Not editable" },
	uneditableCheckbox: { type: Boolean, noedit: true, default: true },
	uneditableDate: { type: Types.Date, noedit: true, default: Date.now },
	uneditableSelect: { type: Types.Select, noedit: true, options: 'Sydney, New York, London, Paris, Hong Kong', default: 'Sydney' },
	uneditableLocation: { type: Types.Location, noedit: true, defaults: { street1: '283-285 Kent St', suburb: 'Sydney', state: 'NSW', postcode: '2000', country: 'Australia' } },
});

Thing.schema.virtual('otherSelectValue').get(function () {
	return (this.otherSelect === 'other') ? this.otherValue : this.otherSelect;
});

Thing.track = true;
Thing.register();
