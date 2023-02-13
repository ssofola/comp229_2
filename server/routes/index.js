/*****************************************
 //    File Name: index.js
 // Student Name: Olusegun Sofola
 //   Student ID: 301254272
 //         Date: February 3, 2023
 *****************************************/
// create required objects
var express = require('express');
var router = express.Router();

let indexController = require('../controllers/index');

/* GET Home page. */
router.get('/',indexController.displayHomePage );

router.get('/home', indexController.displayHomePage);

/* GET About Me page. */
router.get('/about', indexController.displayAboutPage);

/* GET Projects page. */
router.get('/projects', indexController.displayProjectsPage);

/* GET Services page. */
router.get('/services', indexController.displayServicesPage);

/* GET home page. */
router.get('/contact', indexController.displayContactPage);

module.exports = router;
