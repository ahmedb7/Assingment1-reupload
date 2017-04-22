// index.js
// Benzir Ahmed
// Portfolio Site
// Assignment 2 Authentication - Contact Routes
// modules required for routing
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
let passport = require('passport');

//define the user model
let UserModel = require('../models/users');
let User = UserModel.User; //aliase for User Model - User Object

// define the contact model
let contact = require('../models/contacts');

// Create a function to check if the user is authenticated
function requireAuth(req, res, next) {
	// Checks if the user is logged 
	if(!req.isAuthenticated()){
		return res.redirect('/login');
	}
	next(); // If you are go to the next object
}

/* GET home page. wildcard */
router.get('/', (req, res, next) => {
	res.render('content/index', {
		title: 'Home',
		contacts: '',
		displayName: req.user ? req.user.displayName: ''
	 });
});

router.get('/about', (req, res, next) => {
	res.render('content/about', {
	title: 'About',
	contacts: '',
	displayName: req.user ? req.user.displayName: ''
	});
});

router.get('/projects', (req, res, next) => {
	res.render('content/projects', {
	title: 'Projects',
	contacts: '',
	displayName: req.user ? req.user.displayName: ''
	});
});

router.get('/services', (req, res, next) => {
	res.render('content/services', {
	title: 'Services',
	contacts: '',
	displayName: req.user ? req.user.displayName: ''
	});
});

router.get('/contact', (req, res, next) => {
	res.render('content/contact', {
	title: 'Contact',
	contacts: '',
	displayName: req.user ? req.user.displayName: ''
	});
});


module.exports = router;