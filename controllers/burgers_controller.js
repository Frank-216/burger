
/*
Here is where you create all the functions that will do the routing for your app, and the logic of each route.
// still need to do more work on this controller page. 
*/
var express 	= require('express');
var bodyParser 	= require('body-parser');
var method =require('method-override');

var burger= require('../models/burger.js');

// create a new router 
var router = express.Router();
// get funciton to display the home page 
router.get('/',function(req,res){
	res.redirect('/burgers')
})
// Get function to render everything held in the burger database
router.get("/cats",function(req,res){
	// call selectAll function with the paramater CB function
	burger.selectAll(function(data){
		var cbObject = {burgers:data};
		console.log(cbObject);
		res.render("index",bsObject);
	})
})
// Post function to add information to the datebase 
router.post("/burgers/create", function(req,res){
	// takes the valude of the text box and adds it to the array 
	burger.insertOne(val1,function(data){
		res.redirect("/cats")
	});
});
// updates the valude of devaured 
router.put("/burgers/update/:id", function(req,res){
	// take the id of value that is to be updated 
	var id = req.params.id;
	// pass along the ID of the value you want to update to the updateOne function 
	burger.updateOne(id, function(){
		res.redirect("/cats");
	})
});

// Export Router
module.exports = router;