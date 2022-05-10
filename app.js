const Server = require('./src/server');

const server = new Server();

server.listen(7777, "0.0.0.0");
