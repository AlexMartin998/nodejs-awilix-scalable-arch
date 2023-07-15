import { BaseService } from './base.service.js';

export class UserService extends BaseService {
  #userRepository;

  constructor({ UserRepository }) {
    super(UserRepository);
    this.#userRepository = UserRepository;
  }

  async findOneByEmail(email) {
    return await this.#userRepository.findOneByEmail(email);
  }
}
