/*****************************************
 //    File Name: index.js
 // Student Name: Olusegun Sofola
 //  Description: index controller file
 //   Student ID: 301254272
 //         Date: February 3, 2023
 *****************************************/
let express = require('express');
let mongoose = require('mongoose');
let passport = require('passport');

// define the user model
let UserModel = require('../models/user');
const {response} = require("express");
let User = UserModel.User;

module.exports.displayHomePage = function(req, res, next) {
    res.render('index', { title: 'Home', displayName: req.user ? req.user.displayName : '' });
}

module.exports.displayAboutPage = function(req, res, next) {
    res.render('about', { title: 'About Me', displayName: req.user ? req.user.displayName : '' });
}

module.exports.displayProjectsPage = function(req, res, next) {
    res.render('projects', { title: 'Projects', displayName: req.user ? req.user.displayName : '' });
}

module.exports.displayServicesPage = function(req, res, next) {
    res.render('services', { title: 'Services', displayName: req.user ? req.user.displayName : '' });
}

module.exports.displayContactPage = function(req, res, next) {
    res.render('contact', { title: 'Contact Me', displayName: req.user ? req.user.displayName : '' });
}

module.exports.displayLoginPage = function(req, res, next) {
    if(!req.user){
        res.render('auth/login', {
            title: 'Login',
            messages: req.flash('loginMessage'),
            displayName: req.user ? req.user.displayName : ""
        });
    } else {
        res.redirect('/');
    }
}

module.exports.processLoginPage = function(req, res, next) {
    passport.authenticate('local', (err,user,info) => {
        if(err){
            return next(err);
        }
        if(!user){
            req.flash('loginMessage','Authentication Error.');
            return res.redirect('/login');
        }
        req.login(user,(err) => {
            if(err){
                return next(err);
            }
            return res.redirect('/biz-contact-list');
        })
    })(req,res,next)
}

module.exports.displayRegisterPage = function(req, res, next){
    if(!req.user){
        res.render('auth/register',{
            title:'Register',
            messages: req.flash('registerMessage'),
            displayName: req.user ? req.user.displayName : ""
        });
    } else {
        return res.redirect('/');
    }
}

module.exports.processRegisterPage = function(req, res, next){
    let newUser = new User({
        username: req.body.username,
        email: req.body.email,
        displayName: req.body.displayName
    });
    User.register(newUser,req.body.password,(err) => {
        if(err){
            console.log('Error: inserting new user');
            if(err.Name == "UserExistsError"){
                req.flash('RegisterMessage','Registration Error: User Already Exists.');
                console.log('Error: User Already Exists');
            }
            return res.render('auth/register',{
                title:'Register',
                messages: req.flash('registerMessage'),
                displayName: req.user ? req.user.displayName : ''
            });
        } else {
            //if no error exists, registration successful
            //redirect the user and authenticate him
            return passport.authenticate('local')(req,res,() => {
                res.redirect('/book-list');
            });
        }
    });
}

module.exports.performLogout = function (req,res,next){
    req.logout(function (err){
        if(err){
            return next(err);
        }
        res.redirect('/');
    });
}