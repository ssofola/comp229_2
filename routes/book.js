let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// connect to the book model
let Book = require('../models/book');

// define the routes
router.get('/',(req,res,next) => {
    Book.find((err, bookList) => {
        if(err){
            return console.log(err);
        } else {
            res.render('book',{title:'Book List', BookList: bookList})
        }
    });
});

module.exports = router;