let _authService;

class AuthController {
  constructor({ AuthService }) {
    _authService = AuthService;
  }

  async signUp(req, res) {
    const { body } = req;
    const user = await _authService.signUp(body);

    return res.status(201).json(user);
  }

  async signIn(req, res) {
    const { body } = req;
    const signInResponse = await _authService.signIn(body);

    return res.status(200).json(signInResponse);
  }
}

module.exports = AuthController;
