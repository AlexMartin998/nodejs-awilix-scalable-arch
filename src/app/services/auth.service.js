import {
  AlreadyExistsException,
  UnauthorizedException,
} from '../../errors/index.js';
import { generateJWT } from '../../utils/index.js';
import { BaseService } from './base.service.js';

export class AuthService extends BaseService {
  #userService;

  constructor({ UserService }) {
    super(UserService);
    this.#userService = UserService;
  }

  async signUp(user) {
    const { email } = user;
    const userExist = this.#userService.findOneByEmail(email);
    if (userExist) throw new AlreadyExistsException('User already exists');

    return await this.#userService.create(user);
  }

  async signIn({ email, password }) {
    const userExist = await this.#userService.findOneByEmail(email);
    if (!userExist || !userExist.comparePassword(password))
      throw new UnauthorizedException(
        'There was a problem logging in. Check your email and password or create an account.'
      );

    const token = await generateJWT(userExist.id);

    return { token, user: userExist };
  }
}
