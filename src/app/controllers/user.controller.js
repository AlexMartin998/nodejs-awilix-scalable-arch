let _userService;

class UserController {
  constructor({ UserService }) {
    _userService = UserService;
  }

  async findOne(req, res) {
    const { id } = req.params;
    const user = await _userService.findOne(id);

    return res.status(200).json(user);
  }

  async findAll(req, res) {
    const { pageSize, pageNumber } = req.query;
    const users = await _userService.findAll(pageSize, pageNumber);

    return res.status(200).json(users);
  }

  async update(req, res) {
    const { body } = req;
    const { id } = req.params;
    const updatedUser = await _userService.update(id, body);

    return res.status(200).json(updatedUser);
  }

  async remove(req, res) {
    const { id } = req.params;
    await _userService.remove(id);

    return res.status(200);
  }
}

module.exports = UserController;
