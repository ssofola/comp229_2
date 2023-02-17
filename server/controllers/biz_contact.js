/*****************************************
 //    File Name: biz_contact.js
 // Student Name: Olusegun Sofola
 //  Description: business contact controller file
 //   Student ID: 301254272
 //         Date: February 17, 2023
 *****************************************/
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

const BizContact = require("../models/biz_contact");

module.exports.getBizContactList = function (req, res, next){
    BizContact.find((err, bizContactList) => {
        if(err){
            return console.log(err);
        } else {
            res.render('contact/list',{title:'Business Contact List', BizContactList: bizContactList, displayName: req.user ? req.user.displayName : ''});
        }
    });
}

module.exports.getEditContactPage = function (req,res,next) {
    let id = req.params.id;
    console.log(id);
    BizContact.findById(id,(err,bizContactToEdit) => {
        if(err){
            console.log(err);
            res.end(err);
        } else {
            // show the edit view
            res.render('contact/edit',{title:'Edit BizContact', bizContact: bizContactToEdit, displayName: req.user ? req.user.displayName : ''});
        }
    });
}

module.exports.editBizContact = function (req, res, next) {
    let id = req.params.id;
    let updatedBizContact = BizContact({
        "_id": id,
        "contact_name": req.body.contact_name,
        "contact_number": req.body.contact_number,
        "email": req.body.email
    });
    BizContact.updateOne({_id: id}, updatedBizContact,(err) => {
        if(err){
            console.log(err);
            res.end(err);
        } else {
            // show the edit view
            res.redirect('/biz-contact-list');
        }
    });
}

module.exports.deleteBizContact = function (req, res, next) {
    let id = req.params.id;
    BizContact.remove({_id:id}, (err) => {
        if(err){
            console.log(err);
            res.end(err);
        } else {
            // show the edit view
            res.redirect('/biz-contact-list');
        }
    })
}