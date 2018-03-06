const reviews= require('../models/reviews');

// Display list of all reviews.
exports.reviews_list = function(req, res) {
    res.send('NOT IMPLEMENTED: reviews list');
};

// Display detail page for a specific review.
exports.reviews_detail = function(req, res) {
    res.send('NOT IMPLEMENTED: review detail: ' + req.params.id);
};

// Display review create form on GET.
exports.reviews_create_get = function(req, res) {
    res.send('NOT IMPLEMENTED: review create GET');
};

// Handle review create on POST.
exports.reviews_create_post = function(req, res) {
    res.send('NOT IMPLEMENTED: review create POST');
};

// Display review delete form on GET.
exports.reviews_delete_get = function(req, res) {
    res.send('NOT IMPLEMENTED: review delete GET');
};

// Handle review delete on POST.
exports.reviews_delete_post = function(req, res) {
    res.send('NOT IMPLEMENTED: review delete POST');
};

// Display review update form on GET.
exports.reviews_update_get = function(req, res) {
    res.send('NOT IMPLEMENTED: review update GET');
};

// Handle review update on POST.
exports.reviews_update_post = function(req, res) {
    res.send('NOT IMPLEMENTED: review update POST');
};