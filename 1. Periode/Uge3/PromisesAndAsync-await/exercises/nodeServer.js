const http = require('http');
const getSecureRandoms = require('./ex1-crypto-module');

const server = http.createServer(async (req, res) => {
  if (req.url === '/api/securerandoms') {
    res.setHeader('Content-Type', 'application/json');
    
    let temp = await getSecureRandoms();
    res.write(JSON.stringify(temp));
    return res.end();
  }
  if (req.url === '/') {
    res.setHeader('Content-Type', 'text/html');
    res.write(`<h2>Simple node HTTP server demo</h2>
      <p>Exposes this endpoint <code>/api/securerandoms</code></p>
    `);
    return res.end();
  }
});
server.on('connection', (sock) => {
  // You can get the client-IP in here, using sock.remoteAddress)
});
server.listen(3000);
console.log('listening on 3000');

//Register for the "DosDetected" event and console.log the url and time info.