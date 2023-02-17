/*****************************************
 //    File Name: book.js
 // Student Name: Olusegun Sofola
 //  Description: book data model
 //   Student ID: 301254272
 //         Date: February 3, 2023
 *****************************************/
let mongoose = require('mongoose');

// create the books model class
let bookModel = mongoose.Schema({
    name: String,
    author: String,
    published: String,
    description: String,
    price: Number
}, {
    collection: "books"
});

// export the module
module.exports = mongoose.model('Book', bookModel);