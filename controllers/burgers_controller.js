
/*
Here is where you create all the functions that will do the routing for your app, and the logic of each route.
*/
var express 	= require('express');
var bodyParser 	= require('body-parser');
var method =require('method-override');

var burger= require('../models/burger.js');

// create a new router 
var router = express.Router();

router.get('/',function(req,res){
	res.redirect('/burgers')
})

router.get()