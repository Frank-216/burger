/*
Here is where you setup a model for how to interface with the database.
*/

var orm = require('../config/orm.js');

var burgers = {

	selectAll:function(cb){
		orm.selectAll('burgers',function(res){
			cb(res);
		})
	},
	insertOne:function(value1,cb){
		orm.insertOne("burgers",value1,function(res){
			cb(res);
		});
	},
	updateOne: function(id, cb){
		orm.updateONe('burgers',id,function(res){
			cb(res);
		});
	}
};

module.exports = burgers;