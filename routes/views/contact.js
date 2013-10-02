var keystone = require('keystone'),
	Enquiry = keystone.list('Enquiry');

exports = module.exports = function(req, res) {
	
	var view = new keystone.View(req, res),
		locals = res.locals;
	
	locals.section = 'contact';
	locals.enquiryTypes = Enquiry.fields.enquiryType.ops;
	locals.formData = req.body || {};
	locals.validationErrors = {};
	locals.enquirySubmitted = false;
	
	view.on('post', { action: 'contact' }, function(next) {
		
		var application = new Enquiry.model(),
			updater = application.getUpdateHandler(req);
		
		updater.process(req.body, {
			flashErrors: true
		}, function(err) {
			if (err) {
				locals.validationErrors = err.errors;
			} else {
				locals.enquirySubmitted = true;
			}
			next();
		});
		
	});
	
	view.render('contact', {
		section: 'contact',
		
	});
	
}
