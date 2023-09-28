const chai = require('chai');
const chaiHttp = require('chai-http');
const { expect } = chai;
chai.use(chaiHttp);

var request = require('supertest');
describe('loading express...', function () {
  var server;
  beforeEach(function () {
    server = require('../server');
  });
  afterEach(function () {
    server.close();
  });

  it('responds with an array and property "timestamp"', function testSlash(done) {
  request(server)
    .get('/')
    .end((err, res) => {
      expect(res).to.have.status(200);
      expect(res.body).to.be.an('array'); // Check if the response is an array
      expect(res.body[0]).to.have.property('timestump'); // Check for the "timestamp" key
      done();  
    });
  });
});
