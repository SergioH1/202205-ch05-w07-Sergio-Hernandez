import http from 'http';
import { app } from './app.js';

const PORT = process.env.PORT || 3300;
app.set('port', PORT);
const server = http.createServer(app);
server.listen(PORT);
