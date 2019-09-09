var express 		 = require('express');
	connect_database = require('./config/db');

var app = express();

connect_database();

app.use(express.json({ extended: false }));

app.use('/api/users', require('./routes/api/users'));
app.use('/api/transfers', require('./routes/api/transfers'));

app.listen(process.env.PORT, () => console.log(`Server running... Port: ${process.env.PORT}`));
