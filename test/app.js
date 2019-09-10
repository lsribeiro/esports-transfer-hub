const mongoose  = require("mongoose"),
	  chai 		= require('chai'),
	  chaiHttp 	= require('chai-http'),
	  server 	= require('../app');

require('dotenv').config();

const expect = chai.expect;

chai.use(chaiHttp);

describe('Testing express server', () => {
    it('should return 200 for /', (done) => {
        chai.request(server)
            .get('/')
            .then((res) => {
                expect(res).to.have.status(200);
				expect(res.body).to.be.an('object');
				expect(res.body).to.eql({status: "running"});
				done();
            })
			.catch((err) => {
				console.log(err);
				done();
			});
    });
	it('should return 404 for missing page', (done) => {
        chai.request(server)
            .get('/abcdefg')
            .then((res) => {
                expect(res).to.have.status(404);
				done();
            })
			.catch((err) => {
				console.log(err);
				done();
			});
    });
});

describe('Testing enviroment variables', () => {
	it('expects PORT to be defined', (done) => {
		expect(process.env.PORT).to.exist;
		done();
	});
	it('expects JWT_SECRET to be defined', (done) => {
		expect(process.env.JWT_SECRET).to.exist;
		done();
	});
	it('expects DB_CON to be defined', (done) => {
		expect(process.env.DB_CON).to.exist;
		done();
	});
	it('expects DB_TEST_CON to be defined', (done) => {
		expect(process.env.DB_TEST_CON).to.exist;
		done();
	});
});
