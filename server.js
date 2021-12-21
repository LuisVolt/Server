const http = require('http');

const port = 3000;

const server = hhtp.createerver((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.edn('Hello, World');
});

server.listen(port, () => {
  console.log('Server running on port: ${port}');
});
