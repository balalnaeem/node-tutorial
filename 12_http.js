const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end('This is our home page.');
  } else if (req.url === '/about') {
    res.end('This is our short history.');
  } else {
    res.end(`
      <h1>Oops!</h1>
      <p>Can't seem to find what you are looking for.
      <a href="/">Go back home</a>
    `);
  }
});

server.listen(3000);