const HttpException = require('./HttpException');

class AlreadyExistsException extends HttpException {
  constructor(message) {
    super(message, 400);
    this.name = 'AlreadyExistsException';
  }
}

module.exports = AlreadyExistsException;
