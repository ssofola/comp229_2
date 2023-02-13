let express = require('express');
let router = express.Router();

module.exports.displayHomePage = function(req, res, next) {
    res.render('index', { title: 'Home' });
}

module.exports.displayAboutPage = function(req, res, next) {
    res.render('about', { title: 'About Me' });
}

module.exports.displayProjectsPage = function(req, res, next) {
    res.render('projects', { title: 'Projects' });
}

module.exports.displayServicesPage = function(req, res, next) {
    res.render('services', { title: 'Services' });
}

module.exports.displayContactPage = function(req, res, next) {
    res.render('contact', { title: 'Contact Me' });
}