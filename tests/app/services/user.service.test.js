import { UserService } from '../../../src/app/services/index.js';
import { UserMock, UserRepositoryMock } from '../../mocks/index.js';

const userMock = UserMock.user;

describe('[ USER SERVICE ]: Test suit', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('1. Should find a user by id', async () => {
    const UserRepository = UserRepositoryMock;
    UserRepository.findOne.mockReturnValue(userMock);

    const _userService = new UserService({ UserRepository });
    const expected = await _userService.findOne(userMock._id);
    expect(expected).toMatchObject(userMock);
  });
});
