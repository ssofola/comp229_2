/*****************************************
 //    File Name: biz_contact.js
 // Student Name: Olusegun Sofola
 //  Description: business contact routes
 //   Student ID: 301254272
 //         Date: February 17, 2023
 *****************************************/
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
let passport = require('passport');

// get the bizContact controller
let bizContactController = require('../controllers/biz_contact');

// helper guard function
function requireAuth(req,res,next){
    // check if user is logged in
    if(!req.isAuthenticated()){
        return res.redirect('/login');
    }
    next();
}

// define the routes

/* GET route for displaying the Biz Contact List page - READ operation */
router.get('/', requireAuth, bizContactController.getBizContactList);

/* GET route for displaying the Biz Contact Edit page - UPDATE operation */
router.get('/edit/:id',requireAuth,bizContactController.getEditContactPage);

/* POST route for processing the Biz Contact Edit page - UPDATE operation */
router.post('/edit/:id',requireAuth,bizContactController.editBizContact);

/* DELETE route for deleting from the Biz Contact Edit page - DELETE operation */
router.get('/delete/:id',requireAuth,bizContactController.deleteBizContact);

module.exports = router;