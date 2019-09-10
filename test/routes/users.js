const mongoose  = require("mongoose"),
	  chai 		= require('chai'),
	  chaiHttp 	= require('chai-http'),
	  jwt 		= require('jsonwebtoken'),
	  User 		= require('../../models/User');
	  server 	= require('../../app');

const { connect_test_db } = require('../../config/db');

require('dotenv').config();

const expect = chai.expect;

chai.use(chaiHttp);

describe('Testing User routes', () => {
	describe('POST /', () => {
		let token;

		before((done) => {
			connect_test_db(done); //TODO: config/db.js
		});

		it('should return a jwt token', (done) => {
			chai.request(server)
				.post('/api/users/')
				.send({ email: "user@email.com", password: "123abc456" })
				.then((res) => {
					expect(res).to.have.status(200);
					expect(res.body).to.be.an('object');

					token = res.body.token;

					done();
				})
				.catch((err) => {
					console.log(err);
					done();
				});
		});

		it('expects jwt token to decode to a valid user', (done) => {
			const decoded = jwt.verify(token, process.env.JWT_SECRET);
			const user_promise = User.findById(decoded.user.id).exec();

			user_promise.then((user) => {
				expect(user).to.exist;
				expect(user.id).to.eql(decoded.user.id);
				done();
			})
			.catch((err) => {
				console.log(err);
				done();
			});
		});
	});
});
