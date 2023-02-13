let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// connect to the book model
let Book = require('../models/book');

// get the book controller
let bookController = require('../controllers/book');

// define the routes
/* GET route for displaying the Book List page - READ operation */
router.get('/',bookController.getBookList);
/* GET route for displaying the Book Add page - CREATE operation */
router.get('/add',bookController.getAddBookPage);
/* POST route for processing the Book Add page - CREATE operation */
router.post('/add',bookController.addNewBook);
/* GET route for displaying the Book Edit page - UPDATE operation */
router.get('/edit/:id',bookController.getEditBookPage);
/* POST route for processing the Book Edit page - UPDATE operation */
router.post('/edit/:id',bookController.editBook);
/* DELETE route for deleting from the Book Edit page - DELETE operation */
router.get('/delete/:id',bookController.deleteBook);

module.exports = router;