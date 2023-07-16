const HttpException = require('./HttpException');

class UnauthorizedException extends HttpException {
  constructor(message) {
    super(message, 401);
    this.name = 'UnauthorizedException';
    // Logger.error(this.name);
  }
}

module.exports = UnauthorizedException;
