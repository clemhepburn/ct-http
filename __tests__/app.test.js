const request = require('supertest');
const app = require('../lib/app');

describe('app routes', () => {
  it('uses GET to receive all from / ', async() => {
    const res = await request(app)
      .get('/');

    expect(res.text).toEqual('hi');
  });

  it('uses POST  to create a response from /echo', async() => {
    const res = await request(app)
      .post('/echo');

    expect(res.text).toEqual('Boo');
  });

  it('receives red from /red using GET', async() => {
    const res = await request(app)
      .get('/red');

    expect(res.text).toEqual('<h1>red</h1>');
  });

});
