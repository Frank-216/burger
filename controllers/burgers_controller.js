
/*
Here is where you create all the functions that will do the routing for your app, and the logic of each route.
// still need to do more work on this controller page. 
*/
var express 	= require('express');
var router = express.Router();
var burgers = require('../models/burger.js');

// module.exports = function(app){
// 	router.get('/',function(req,res){
// 	console.log(true);
// 	res.redirect('/burger')
// });

// // Get function to render everything held in the burger database
// router.get("/burger",function(req,res){
// 	// call selectAll function with the paramater CB function
// 	burger.selectAll(function(data){
// 		var food = {burgers:data};
// 		console.log(food);
// 		res.render("index",food);
// 	});
// });
// // Post function to add information to the datebase 
// router.get("/burger/create", function(req,res){
// 	console.log("words")
// 	// takes the valude of the text box and adds it to the array 
// 	burger.insertOne(val1,function(data){
// 		res.redirect("/burger")
// 	});
// });
// // updates the valude of devaured 
// router.put("/burgers/update/:id", function(req,res){
// 	// take the id of value that is to be updated 
// 	var id = req.params.id;
// 	// pass along the ID of the value you want to update to the updateOne function 
// 	burger.updateOne(id, function(){
// 		res.redirect("/burger");
// 	})
// });
// }


router.get('/',function(req,res){
	console.log(true);
	res.redirect('/burger');
	console.log("stop");
});

// Get function to render everything held in the burger database
router.get("/burger",function(req,res){
	console.log("Route Hit");
	// call selectAll function with the paramater CB function
	burgers.selectAll(function(data){
		var food = {burgers:data};
		console.log(food);
		res.render("index",food);
	});
});
// Post function to add information to the datebase 
router.post("/burger/create", function(req,res){
	console.log("words")
	// takes the valude of the text box and adds it to the array 
	burgers.insertOne(val1,function(data){
		res.redirect("/burger")
	});
});
// updates the valude of devaured 
router.put("/burgers/update/:id", function(req,res){
	// take the id of value that is to be updated 
	var id = req.params.id;
	// pass along the ID of the value you want to update to the updateOne function 
	burgers.updateOne(id, function(){
		res.redirect("/burger");
	})
});

// Export Router
module.exports = router;