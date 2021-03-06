const http = require('http');

http.createServer((request, response) => {
  console.log(`request comes from ${request.url}`)

  response.writeHead(200, {
    'Access-Control-Allow-Origin': 'http://127.0.0.1:8888',
    'Access-Control-Allow-Headers': 'X-Test-Cors',
    'Access-Control-Allow-Methods': 'POST, PUT',
    'Access-Control-Max-Age': '1000'
  });
  response.end('Hello World');
}).listen(8887);

console.log('Server is running at http://127.0.0.1:8887/');