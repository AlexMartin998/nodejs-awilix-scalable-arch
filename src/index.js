const container = require('./config/container');

const server = container.resolve('Server');
server.listen();
