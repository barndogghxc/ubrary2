var express = require('express');
var router = express.Router();

// Require controller modules.
var booksController = require('../controllers/booksController');
var readController = require('../controllers/readController');
var favsController = require('../controllers/favsController');
var reviewsController = require('../controllers/reviewsController');

/// BOOK ROUTES ///

// GET ubrary home page.
router.get('/', booksController.index);

// GET request for creating a Book.
router.get('/book/create', booksController.books_create_get);

// POST request for creating Book.
router.post('/book/create', booksController.books_create_post);

// GET request to delete Book.
router.get('/book/:id/delete', booksController.books_delete_get);

// POST request to delete Book.
router.post('/book/:id/delete', booksController.books_delete_post);

// GET request for one Book.
router.get('/book/:id', booksController.books_detail);

// GET request for list of all Book items.
router.get('/books', booksController.books_list);

/// READ ROUTES ///

// GET request to review book read.
router.get('/read/:id/review', readController.read_review_get);

// POST request to review book read.
router.post('/read/:id/review', readController.read_review_post);

// GET request for one book read.
router.get('/read/:id', readController.read_detail);

// GET request for list of all books read.
router.get('/read', readController.read_list);

/// FAV ROUTES ///

// GET request to review fav book.
router.get('/fav/:id/review', favController.fav_review_get);

// POST request to review fav book.
router.post('/fav/:id/review', favController.fav_review_post);

// GET request for one favorite book.
router.get('/fav/:id', favController.fav_detail);

// GET request for list of all favorite books.
router.get('/favs', favController.fav_list);


/// REVIEWS ROUTES ///

// GET request for creating a review. 
router.get('/review/create', reviewsController.reviews_create_get);

// POST request for creating a review. 
router.post('/review/create', reviewsController.reviews_create_post);

// GET request to delete a review.
router.get('/review/:id/delete', reviewsController.reviews_delete_get);

// POST request to delete a review.
router.post('/review/:id/delete', reviewsController.reviews_delete_post);

// GET request to update reviews.
router.get('/review/:id/update', reviewsController.reviews_update_get);

// POST request to update reviews.
router.post('/review/:id/update', reviewsController.reviews_update_post);

// GET request for one reviews.
router.get('/review/:id', reviewsController.reviews_detail);

// GET request for list of all reviews.
router.get('/reviews', reviewsController.reviews_list);

module.exports = router;