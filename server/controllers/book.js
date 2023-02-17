/*****************************************
 //    File Name: biz_contact.js
 // Student Name: Olusegun Sofola
 //  Description: books controller file
 //   Student ID: 301254272
 //         Date: February 3, 2023
 *****************************************/
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

const Book = require("../models/book");

module.exports.getBookList = function (req,res,next){
    Book.find((err, bookList) => {
        if(err){
            return console.log(err);
        } else {
            res.render('book/list',{title:'Book List', BookList: bookList, displayName: req.user ? req.user.displayName : ''});
        }
    });
}

module.exports.getAddBookPage = function (req, res, next){
    res.render('book/add',{title:'Add Book', displayName: req.user ? req.user.displayName : ''});
}

module.exports.addNewBook = function (req,res,next){
    let newBook = Book({
        "name": req.body.name,
        "author": req.body.author,
        "published": req.body.published,
        "description": req.body.description,
        "price": req.body.price
    });
    Book.create(newBook,(err,Book) => {
        if(err){
            console.log(err);
            res.end(err);
        } else {
            res.redirect('/book-list');
        }
    });
}

module.exports.getEditBookPage = function (req,res,next) {
    let id = req.params.id;
    Book.findById(id,(err,bookToEdit) => {
        if(err){
            console.log(err);
            res.end(err);
        } else {
            // show the edit view
            res.render('book/edit',{title:'Edit Book', book: bookToEdit, displayName: req.user ? req.user.displayName : ''});
        }
    });
}

module.exports.editBook = function (req,res,next) {
    let id = req.params.id;
    let updatedBook = Book({
        "_id": id,
        "name": req.body.name,
        "author": req.body.author,
        "published": req.body.published,
        "description": req.body.description,
        "price": req.body.price
    });
    Book.updateOne({_id: id}, updatedBook,(err) => {
        if(err){
            console.log(err);
            res.end(err);
        } else {
            // show the edit view
            res.redirect('/book-list');
        }
    });
}

module.exports.deleteBook = function (req,res,next) {
    let id = req.params.id;
    Book.remove({_id:id}, (err) => {
        if(err){
            console.log(err);
            res.end(err);
        } else {
            // show the edit view
            res.redirect('/book-list');
        }
    })
}