const request = require('supertest');
const app = require('../../src/app');
require('should');

describe('POST /grettings', () => {
  it('should respond back with greetings', async () => {
    const server = app.getServer();
    const response = await request(server)
      .post('/greetings')
      .set('Accept', 'application/json')
      .send({ name: 'some-name' })
      .expect(200)
      .expect('Content-Type', /json/);
    response.body.should.eql({
      message: 'hello some-name',
    });
  });
});
