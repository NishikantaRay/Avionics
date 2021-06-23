const express = require('express');
const app = express();
const db = require('./config/db.conn');

const port = process.env.PORT || 3000;

app.listen(port,()=>{
	console.log(`Server started at ${port}`);
});