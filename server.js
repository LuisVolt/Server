const http = require('http');
var dt = require('./firstmodule');

const port = 3001;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.write("The date and time are currently: " + dt.myDateTime());
  res.end('Hello, World');
});

server.listen(port, () => {
  console.log('Server running on port: ${port}');
});
