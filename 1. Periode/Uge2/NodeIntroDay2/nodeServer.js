const http = require('http');
const DosDetector = require('./dosDetector');
const dosDetector = new DosDetector(2000);
const info = require('./SimpleOsFile');

//Brug Firefox til fremvisningen
const server = http.createServer((req, res) => {
  if (req.url === '/api/os-info') {
    res.setHeader('Content-Type', 'application/json');
    //Return a response with OS-info, using the code implemented in part-a
    res.write(JSON.stringify(info));
    return res.end();
  }
  if (req.url === '/') {
    res.setHeader('Content-Type', 'text/html');
    res.write(`<h2>Simple node HTTP server demo</h2>
      <p>Exposes this endpoint <code>/api/os-info</code></p>
    `);
    return res.end();
  }
});
server.on('connection', (sock) => {
  // You can get the client-IP in here, using sock.remoteAddress)
  dosDetector.addUrl(sock.remoteAddress);
  //console.log(sock.remoteAddress);
  //console.log("En besked");
});
server.listen(3000);
console.log('listening on 3000');
dosDetector.on('Message', (arg) => {
    console.log("DOS occurring atm:", arg);
})
//Register for the "DosDetected" event and console.log the url and time info.
