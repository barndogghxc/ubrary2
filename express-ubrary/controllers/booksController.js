const books = require('../models/books');

// Display list of all books.
exports.books_list = function(req, res) {
    res.send('NOT IMPLEMENTED: reading list');
};

// Display detail page for a specific book.
exports.books_detail = function(req, res) {
    res.send('NOT IMPLEMENTED: book detail: ' + req.params.id);
};

// Display book create form on GET.
exports.books_create_get = function(req, res) {
    res.send('NOT IMPLEMENTED: book create GET');
};

// Handle book create on POST.
exports.books_create_post = function(req, res) {
    res.send('NOT IMPLEMENTED: book create POST');
};

// Display book delete form on GET.
exports.books_delete_get = function(req, res) {
    res.send('NOT IMPLEMENTED: book delete GET');
};

// Handle book delete on POST.
exports.books_delete_post = function(req, res) {
    res.send('NOT IMPLEMENTED: book delete POST');
};

