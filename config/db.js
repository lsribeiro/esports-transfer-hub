const mongoose = require('mongoose');

require('dotenv').config();

const db_connection = process.env.NODE_ENV === "test" ? process.env.DB_TEST_CON : process.env.DB_CON;

console.log(`Running db on ${process.env.NODE_ENV}, connection: ${db_connection}`);

const db_config = {
	useNewUrlParser: true,
	useFindAndModify: true,
	useCreateIndex: true
};

const connect_database = async() => {
	try {
		await mongoose.connect(db_connection, db_config);
	} catch(err) {
		console.log(err.message);
		process.exit(1);
	}
};

const connect_test_database = async(done) => {
	try {
		await mongoose.connect(process.env.DB_TEST_CON, db_config, () => {
			mongoose.connection.db.dropDatabase(() => {
				done();
			});
		});
	} catch(err) {
		console.log(err.message);
		process.exit(1);
	}
};

module.exports.connect_db = connect_database;
module.exports.connect_test_db = connect_test_database;
