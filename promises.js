const fs = require('fs');
const net = require('net');
const parseRequest = require('./lib/utils/parseRequest');
const createResponse = require('./lib/utils/createResponse');
const fsPromises = fs.promises;

const promises = net.createServer(socket => {
  socket.on('data', data => {
    const request = parseRequest(data.toString());

    if(request.method === 'GET' && request.path === '/index.html') {
      socket.write(createResponse({ body: '<h1>mic check 1 2 3</h1>' }));
      return fsPromises.readFile('./public/index.html', 'utf-8')
        .then(contents => createResponse(contents));
    } else {
      socket.end(createResponse({ body: 'Not Found', status: '404 Not Found', contentType: 'text/plain' }));
    }
  });
});

module.exports = promises;

