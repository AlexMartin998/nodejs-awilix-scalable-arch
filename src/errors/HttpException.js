class HttpException extends Error {
  constructor(message, statusCode) {
    super(message);
    this.name = 'HttpException';
    this.status = statusCode;
  }
}

module.exports = HttpException;
