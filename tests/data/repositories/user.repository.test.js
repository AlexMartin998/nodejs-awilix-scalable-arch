const mockingoose = require('mockingoose');

const { User } = require('../../../src/data/models');
const { UserRepository } = require('./../../../src/data/repositories');
const { UserMock } = require('./../../mocks');

describe('User Repository Tests', () => {
  beforeEach(() => {
    mockingoose.resetAll();
    jest.clearAllMocks();
  });

  it('1. Should return a user by id', async () => {
    const _user = { ...UserMock.user };
    delete _user.password;

    // Cunado se realice el 'findOne' del model User retorner user
    mockingoose(User).toReturn(UserMock.user, 'findOne');

    const _userRepository = new UserRepository({ User });
    const expected = await _userRepository.findOne(_user._id);

    // Asi tenemos un Literal Object de JS. Expected viene en formato raro x mockingoose
    delete _user._id;
    expect(JSON.parse(JSON.stringify(expected))).toMatchObject(_user);
  });
});
