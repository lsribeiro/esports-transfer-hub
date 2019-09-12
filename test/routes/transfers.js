const mongoose  = require("mongoose"),
	  chai 		= require('chai'),
	  chaiHttp 	= require('chai-http'),
	  jwt 		= require('jsonwebtoken'),
	  Transfer 	= require('../../models/Transfer');
	  server 	= require('../../app');

const { connect_test_db } = require('../../config/db');

require('dotenv').config();

const expect = chai.expect;

chai.use(chaiHttp);

describe('Testing Transfer routes', () => {
	let transfer = {
		player: { country: "BR", name: "Coldzera" },
		from_team: { logo: "../../logos/mibr.png", name: "mibr" },
		to_team: { logo: "../../logos/mibr.png", name: "mibr" },
		status: Transfer.Status.RUMOUR,
		sources: [],
		game: Transfer.Game.CSGO
	};

	before((done) => {
		connect_test_db(done); //TODO: config/db.js
	});

	describe('POST /', () => {
		it('should not authorize a new transfer without a token', (done) => {
			chai.request(server)
				.post('/api/transfers/')
				.send(transfer)
				.then((res) => {
					expect(res).to.have.status(401);
					expect(res.body).to.be.an('object');
					expect(res.body).to.eql({ msg: 'Authorization denied' });
					done();
				})
				.catch((err) => {
					console.log(err);
					done();
				});
		});
		xit('should create a new transfer', (done) => {
			chai.request(server)
				.post('/api/transfers/')
				.send(transfer)
				.then((res) => {
					expect(res).to.have.status(200);
					expect(res.body).to.be.an('object');
					expect(res.body).to.eql({ msg: 'success' });
					done();
				})
				.catch((err) => {
					console.log(err);
					done();
				});
		});

	});

	xdescribe('GET /', () => {
		it('should return all stored transfers', (done) => {
			chai.request(server)
				.get('/api/transfers/')
				.then((res) => {
					expect(res).to.have.status(200);
					expect(res.body).to.be.an('array');
					expect(res.body).to.have.length(1);
					const { player, from_team, to_team, status, sources, game } = res.body[0];
					const foundTransfer = { player, from_team, to_team, status, sources, game };
					expect(foundTransfer).to.eql(transfer);

					done();
				})
				.catch((err) => {
					console.log(err);
					done();
				});
		});
	});
});
