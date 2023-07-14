import { BaseRepository } from './base.repository.js';

export class UserRepository extends BaseRepository {
  #user;

  constructor({ User }) {
    super(User);
    this.#user = User;
  }

  async findOneByEmail(email) {
    return await this.#user.findOne({ email });
  }
}
