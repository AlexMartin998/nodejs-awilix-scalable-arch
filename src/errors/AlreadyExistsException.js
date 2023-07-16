import { HttpException } from './HttpException.js';

export class AlreadyExistsException extends HttpException {
  constructor(message) {
    super(message, 400);
    this.name = '';
  }
}
