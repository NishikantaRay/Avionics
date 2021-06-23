const pg = require('pg');
const config = require('./db.config');

const db = new pg.Pool(config);

db.connect(function(err,client,done){
	if(err){
		console.error("Could not connect to database",err);
        done();
	}else{
        console.log("Connected to database");
        //Intitial table query
    }
})

module.exports = db;