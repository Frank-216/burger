// require mysql 
var mysql = require('mysql');

// create connection to database burgers 

var source = {
	localhost:{
		// would need to adjust to other host for heroku deployment
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'burgers_db'
	}
}
var connection = mysql.createConnection(process.env.JAWSDB_URL || source.localhost);

// creates connection 
connection.connect(function (err) {
	if (err) {
		console.error('error connecting: ' + err.stack);
		return;
	}
	console.log('connected as id ' + connection.threadId);
});
// exports connection 
module.exports = connection;