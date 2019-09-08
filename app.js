var express 		 = require('express');
	connect_database = require('./config/db');

var app = express();

connect_database();

app.listen(process.env.PORT, () => console.log(`Server running... Port: ${process.env.PORT}`));
