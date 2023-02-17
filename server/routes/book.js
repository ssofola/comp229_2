let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
let passport = require('passport');

// get the bizContact controller
let bookController = require('../controllers/book');

// helper guard function
function requireAuth(req,res,next){
    // check if user is logged in
    if(!req.isAuthenticated()){
        return res.redirect('/login');
    }
    next();
}

// define the routes

/* GET route for displaying the Book List page - READ operation */
router.get('/',bookController.getBookList);

/* GET route for displaying the Book Add page - CREATE operation */
router.get('/add',requireAuth,bookController.getAddBookPage);

/* POST route for processing the Book Add page - CREATE operation */
router.post('/add',requireAuth,bookController.addNewBook);

/* GET route for displaying the Book Edit page - UPDATE operation */
router.get('/edit/:id',requireAuth,bookController.getEditBookPage);

/* POST route for processing the Book Edit page - UPDATE operation */
router.post('/edit/:id',requireAuth,bookController.editBook);

/* DELETE route for deleting from the Book Edit page - DELETE operation */
router.get('/delete/:id',requireAuth,bookController.deleteBook);

module.exports = router;