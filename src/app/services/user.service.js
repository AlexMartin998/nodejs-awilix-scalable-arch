const BaseService = require('./base.service');

class UserService extends BaseService {
  #userRepository;

  constructor({ UserRepository }) {
    super(UserRepository);
    this.#userRepository = UserRepository;
  }

  async findOneByEmail(email) {
    return await this.#userRepository.findOneByEmail(email);
  }
}

module.exports = UserService;
