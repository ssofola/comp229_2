/*****************************************
 //    File Name: index.js
 // Student Name: Olusegun Sofola
 //  Description: index routes
 //   Student ID: 301254272
 //         Date: February 3, 2023
 *****************************************/
// create required objects
var express = require('express');
var router = express.Router();

let indexController = require('../controllers/index');
const bookController = require("../controllers/book");

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

/* GET route for displaying the login page - CREATE operation */
router.get('/login',indexController.displayLoginPage);

/* POST route for processing the login page - CREATE operation */
router.post('/login',indexController.processLoginPage);

/* GET route for displaying the register page - CREATE operation */
router.get('/register',indexController.displayRegisterPage);

/* POST route for processing the register page - CREATE operation */
router.post('/register',indexController.processRegisterPage);

/* GET route to logout from the web application */
router.get('/logout',indexController.performLogout);

module.exports = router;
