const fs = require('fs');
const path = require('path');

const config = {
	user : 'sunil200228',
	password : 'sunilcse@3000',
	host : 'free-tier8.aws-ap-southeast-1.cockroachlabs.cloud',
	database : 'avionics-80.avionics',
	port : 26257,
	ssl:{
        ca : fs.readFileSync(path.resolve(__dirname,'../certs/cc-ca.crt')).toString(),
        }
};

module.exports = config;