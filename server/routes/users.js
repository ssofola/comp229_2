/*****************************************
 //    File Name: user.js
 // Student Name: Olusegun Sofola
 //  Description: user route
 //   Student ID: 301254272
 //         Date: February 3, 2023
 *****************************************/
// create required objects
let express = require('express');
let router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
