var keystone = require('keystone'),
	Types = keystone.Field.Types;

var Enquiry = new keystone.List('Enquiry', {
	nocreate: true
});

Enquiry.add({
	name: { type: Types.Name, required: true },
	email: { type: Types.Email, required: true },
	phone: { type: String },
	enquiryType: { type: Types.Select, options: [
		{ value: 'message', label: "Just leaving a message" },
		{ value: 'question', label: "I've got a question" },
		{ value: 'other', label: "Something else..." }
	], required: true },
	message: { type: Types.Textarea, required: true },
	timestamp: { type: Date, default: Date.now, noedit: true }
});

Enquiry.addPattern('standard meta');
Enquiry.defaultSort = '-timestamp';
Enquiry.defaultColumns = 'name, email, enquiryType, timestamp';
Enquiry.register();
