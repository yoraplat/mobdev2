const http = require('http');
const url = require('url');

const hostName = '127.0.0.1';
const port = '8080';

const server = http.createServer((req, resp) => {
    resp.statusCode = 200;
    resp.setHeader('Content-Type', 'text/html');

    const userAgent = req.headers['user-agent'];
    const urlParts = url.parse(req.url, true);
    const paramName = (!urlParts.query.name)? 'New Media Development' : urlParts.query.name;
    console.log(urlParts);

    resp.end(`<h1>Hello ${paramName}</h1><p>Your UserAgent is: ${userAgent}</p><p>I'm a watcher</p>`);
});

server.listen(port, hostName, () => {
    console.log(`Node server running at http://${hostName}:${port}/`)
});

