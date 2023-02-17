/*****************************************
 //    File Name: biz_contact.js
 // Student Name: Olusegun Sofola
 //  Description: business contact data model
 //   Student ID: 301254272
 //         Date: February 17, 2023
 *****************************************/
// require modules for the user model
let mongoose = require('mongoose');

let bizContactModel = mongoose.Schema({
    contact_name:{
        type:String,
        default: '',
        trim: true,
        required: 'contact name is required'
    }, contact_number:{
        type:String,
        default: '',
        trim: true,
        required: 'contact number is required'
    }, email:{
        type:String,
        default: '',
        trim: true,
        required: 'email address is required'
    }
},{
    collection: "biz_contacts"
});

// export the module
module.exports = mongoose.model('BizContact',bizContactModel);