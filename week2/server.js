const http = require('http');
const express = require('express');
const app = express();
const server = http.Server(app);

const nodeEnv = (process.env.NODE_ENV)?
process.env.NODE_ENV:'development';
if(nodeEnv !== 'production') {
    console.log('Do some development stuff');
}
const hostName = '127.0.0.1';
const port = '8080';

app.get('/', (req, res) => {
    res.send('Hello Express Yes :)');
});

app.use((req, res, next) => {
    const err = new Error('Not Found!');
    err.status = 400;
    next(err);
});

app.use((err, req, res) => {
    res.status(err.status || 500);
    res.send('error');
});

server.listen(port, hostName, () => {
    console.log(`Node server running at http://${hostName}:${port}/`)
});

