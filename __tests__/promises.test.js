const request = require('supertest');
const promises = require('../promises.js');

describe('promise route', () => {
  it.only('reads the html file in the public folder', async() => {
    const res = await request(promises)
      .get('/index.html');

    expect(res.text).toEqual('<h1>mic check 1 2 3</h1>');
  });
});
