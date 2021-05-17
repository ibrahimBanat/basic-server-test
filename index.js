const server = require('./src/server');

require('dotenv').config();

const port = process.env.PORT || 3000;

server.start(port);
