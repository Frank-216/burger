
// Dependencies
// =============================================================
var express 	= require('express');
var bodyParser 	= require('body-parser');
var method =require('method-override');
var path = require('path');
var routes = require("./controllers/burgers_controller.js");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

// override with POST having ?_method=DELETE
app.use(method('_method'));
// //Require HandleBars : Standard files for handlebars
// //==============================================================
var exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({
	defaultLayout: 'main'
}));

app.set('view engine', 'handlebars');

//==============================================================
// Routes
// =============================================================

app.use("/",routes);



// Starts the server to begin listening 
// =============================================================
app.listen(PORT, function(){
	console.log('App listening on PORT ' + PORT);
})