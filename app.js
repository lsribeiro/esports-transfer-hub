const express    = require('express');
const path 		 = require('path');
const cookieParser = require('cookie-parser');

const { connect_db } = require('./config/db');

var app = express();

connect_db();

app.use(cookieParser());
app.use(express.json({ extended: false }));

app.use('/api/users', require('./routes/api/users'));
app.use('/api/transfers', require('./routes/api/transfers'));
app.use('/api/auth', require('./routes/api/auth'));

app.get('/*', function (req, res) {
  	res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

app.listen(process.env.PORT, () => console.log(`Server running... Port: ${process.env.PORT}`));

module.exports = app;
