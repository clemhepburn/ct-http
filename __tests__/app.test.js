const request = require('supertest');
const app = require('../lib/app');

describe('app routes', () => {
  it.only('uses GET to receive all from / ', async() => {
    const content = {
      body: 'hi',
      status: '200 OK',
      contentType: 'text/plain'
    };

    const res = await request(app)
      .get('/');

    expect(res.text).toEqual('hi');
  });

  it.only('uses POST  to create a response from /echo', async() => {

    const res = await request(app);

    expect(res.text).toEqual(`HTTP/1.1 200 OK
  Accept-Ranges: bytes
  Content-Length: 0
  Content-Type: text/plain\r
  \r`);
  });

});
