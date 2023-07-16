const HttpException = require('./HttpException');

class NotFoundException extends HttpException {
  constructor(message) {
    super(message, 404);
    this.name = 'NotFoundException';
  }
}

module.exports = NotFoundException;
