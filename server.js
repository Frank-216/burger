
// Dependencies
// =============================================================
var express 	= require('express');
var bodyParser 	= require('body-parser');
var method =require('method-override');
var path = require('path');




// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

// static directory
// app.use(express.static('app/public'));
// //================================================================
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
//add these when files are created 
//require("./app/routes/api-routes.js")(app)
//require("./app/routes/html-routes.js")(app)
app.get('/',function(req,res){
	res.render("<h1>Hello World</h1>");
});



// Starts the server to begin listening 
// =============================================================
app.listen(PORT, function(){
	console.log('App listening on PORT ' + PORT);
})