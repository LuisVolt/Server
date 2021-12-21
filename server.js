const http = require('http');

const port1 = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.edn('Hello, World');
});

server.listen(port1, () => {
  console.log('Server running on port: ${port1}');
});
