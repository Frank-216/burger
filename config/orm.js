// recall connection file. 
var connection = require('./connection.js');


var orm = {
	// create a function that selects everything 
	// cb is callback
	selectAll:function(tableName,cb){
		
		var queryLine = "SELECT * FROM ";
		queryLine = queryLine + tableName;
		console.log(query);
		
		connection.query(queryLine,function(err, res){
			if(err) throw err;
			cb(result);
		});
	},
	// add a value to the database 
	insertOne:function(tableName,value1,cb){
		var queryLine = "INSERT INTO " + tableName + "(burger_name, devoured) VALUES(?,?)";

		connection.query(queryLine,[value1,false],function(err,res){
			if(err) throw err;
			cb(result);
		});
	},
	//add a function that will update a value 
	// will need to adjust depending on what my object contains. 
	updateOne: function(tableName,id,cb){
		var queryLine ="UPDATE " + tableName;
		queryLine = queryLine + " SET ";
		queryLine = queryLine + " devoured = true";
		queryLine =queryLine + " Where id = "+ id;

		connection(queryLine,function(err, res){
			if(err) throw err;
			cb(res);
		});
	}
};

module.exports = orm; 
