const mongoose = require('mongoose');

require('dotenv').config();

const connect_database = async() => {
	try {
		await mongoose.connect(process.env.DB_CON, {
			useNewUrlParser: true,
			useFindAndModify: true,
			useCreateIndex: true
		});
	} catch(err) {
		console.log(err.message);
		process.exit(1);
	}
};

module.exports = connect_database;
