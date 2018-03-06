const read = require('../models/read');

// Display list of all read.
exports.read_list = function(req, res) {
    res.send('NOT IMPLEMENTED: book read list');
};

// Display detail page for a specific book read.
exports.read_detail = function(req, res) {
    res.send('NOT IMPLEMENTED: book read detail: ' + req.params.id);
};

