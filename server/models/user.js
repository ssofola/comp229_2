/*****************************************
 //    File Name: user.js
 // Student Name: Olusegun Sofola
 //  Description: user data model
 //   Student ID: 301254272
 //         Date: February 17, 2023
 *****************************************/
// require modules for the user model
let mongoose = require('mongoose');
let passportLocalMongoose = require('passport-local-mongoose');

let User = mongoose.Schema({
    username:{
        type:String,
        default: '',
        trim: true,
        required: 'username is required'
    }, email:{
        type:String,
        default: '',
        trim: true,
        required: 'email address is required'
    }, displayName:{
        type:String,
        default: '',
        trim: true,
        required: 'display name is required'
    }, created:{
        type:Date,
        default: Date.now()
    }, updated: {
        type:Date,
        default: Date.now()
    }
},{
    collection: "users"
});

// configure options for the user model
let options = ({
    missingPasswordError: 'Wrong / Missing Password'
});

User.plugin(passportLocalMongoose,options);

module.exports.User = mongoose.model('User',User);