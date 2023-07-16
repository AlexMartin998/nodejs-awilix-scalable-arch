const BaseRepository = require('./base.repository');

class UserRepository extends BaseRepository {
  #user;

  constructor({ User }) {
    super(User);
    this.#user = User;
  }

  async findOneByEmail(email) {
    return await this.#user.findOne({ email });
  }
}

module.exports = UserRepository;
