const request = require('supertest');
const promises = require('../promises.js');

describe('promise route', () => {
  it.only('reads the html file in the public folder', async() => {
    const res = await request(promises)
      .get('/index.html');

    expect(res.text).toEqual(`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <h1>mic check 1 2 3</h1>
</body>
</html>`);
  });
});
