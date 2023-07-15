import { HttpException } from './HttpException.js';

export class NotFoundException extends HttpException {
  constructor(message) {
    super(message, 404);
    this.name = 'NotFoundException';
  }
}
