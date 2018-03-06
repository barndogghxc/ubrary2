const favs= require('../models/favs');

// Display list of all reviews.
exports.favs_list = function(req, res) {
    res.send('NOT IMPLEMENTED: favs list');
};

// Display detail page for a specific review.
exports.favs_detail = function(req, res) {
    res.send('NOT IMPLEMENTED: favs detail: ' + req.params.id);
};

