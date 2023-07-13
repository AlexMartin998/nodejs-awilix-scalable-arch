import { container } from './config/container.js';

const server = container.resolve('Server');
server.listen();
