const mockingoose = require('mockingoose');

import { User } from '../../../src/data/models/index.js';
import { UserRepository } from '../../../src/data/repositories/index.js';
import { UserMock } from './../../mocks/index.js';

describe('[ USER REPOSITORY ]: Suit tests', () => {
  beforeEach(() => {
    mockingoose.resetAll();
    jest.clearAllMocks();
  });

  it('1. Should return a user by id', async () => {
    const mockedUser = { ...UserMock.user };
    delete mockedUser.password;
    delete mockedUser._id;

    // set the response for a specific mongoose method
    mockingoose(User).toReturn(UserMock.user, 'findOne');

    const userRepository = new UserRepository({ User });
    const expected = await userRepository.findOne(mockedUser._id);

    // expected to come with more information and stringent methods could fail
    expect(JSON.parse(JSON.stringify(expected))).toMatchObject(mockedUser);
  });
});
