const mockingoose = require('mockingoose');

import { User } from '../../../src/data/models/index.js';
import { UserRepository } from '../../../src/data/repositories/index.js';
import { UserMock } from './../../mocks/index.js';

const userMock = UserMock.user;
let usersMock = UserMock.users;

describe('[ USER REPOSITORY ]: Test suit', () => {
  beforeEach(() => {
    mockingoose.resetAll();
    jest.clearAllMocks();
  });

  it('1. Should return a user by id', async () => {
    const mockedUser = { ...userMock };
    delete mockedUser.password;
    delete mockedUser._id;

    // set the response for a specific mongoose method
    mockingoose(User).toReturn(userMock, 'findOne');

    const userRepository = new UserRepository({ User });
    const expected = await userRepository.findOne(mockedUser._id);

    // expected to come with more information and stringent methods could fail
    expect(JSON.parse(JSON.stringify(expected))).toMatchObject(mockedUser);
  });

  it('2. Should return a user collection', async () => {
    mockingoose(User).toReturn(usersMock, 'find');

    const userRepository = new UserRepository({ User });
    const expected = await userRepository.findAll();

    usersMock = usersMock.map(user => {
      delete user.password;
      delete user._id;
      return user;
    });

    expect(JSON.parse(JSON.stringify(expected))).toMatchObject(usersMock);
  });

  it('3. Should update an especific user by id', async () => {
    const mockedUser = { ...userMock };
    delete mockedUser.password;

    mockingoose(User).toReturn(mockedUser, 'findOneAndUpdate');
    const userRepository = new UserRepository({ User });

    const expected = await userRepository.update(mockedUser._id, {
      name: 'Marluan',
    });
    delete mockedUser._id;

    expect(JSON.parse(JSON.stringify(expected))).toMatchObject(mockedUser);
  });

  it('4. Should delete an especific user by id', async () => {
    mockingoose(User).toReturn(userMock, 'findOneAndDelete');

    const userRepository = new UserRepository({ User });
    const expected = await userRepository.remove(userMock._id);

    expect(!!expected).toEqual(false);
  });
});
