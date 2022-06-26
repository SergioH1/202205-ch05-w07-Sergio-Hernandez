import http from 'http';

import { app } from './app.js';

const PORT = process.env.PORT || 3300;

const server = http.createServer(app);
function onlistening() {
    console.log('listening in port' + PORT);
}

app.set('port', PORT);

server.listen(PORT);

server.on('listening', onlistening);
