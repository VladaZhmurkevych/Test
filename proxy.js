const http = require('http')
const request = require('request')

http.createServer((req, res) => {
  console.log(req)


  if (req.method === 'GET'){
    request({
      url: req.url,
      headers: req.headers
    }, (err, resp, body) => {
      res.end(body)
    })
  }

  console.log(req.body)
  if (req.method === 'POST'){
    request({
      method: req.method,
      url: req.url,
      headers: req.headers,
      form: req.form,
    }, (err, resp, body) => {
      res.end(body)
    })
  }


}).listen(8080)
/*
const http = require('http');
const net = require('net');
const url = require('url');

// Create an HTTP tunneling proxy
const proxy = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('okay');
});
proxy.on('connect', (req, cltSocket, head) => {
  // connect to an origin server
  const srvUrl = url.parse(`http://${req.url}`);
  const srvSocket = net.connect(srvUrl.port, srvUrl.hostname, () => {
    cltSocket.write('HTTP/1.1 200 Connection Established\r\n' +
      'Proxy-agent: Node.js-Proxy\r\n' +
      '\r\n');
    srvSocket.write(head);
    srvSocket.pipe(cltSocket);
    cltSocket.pipe(srvSocket);
  });
});

// now that proxy is running
proxy.listen(1337, '127.0.0.1', () => {

});
*/
