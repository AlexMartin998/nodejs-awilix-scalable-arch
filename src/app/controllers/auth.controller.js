let _authService;

export class AuthController {
  async singUp(req, res) {
    const { body } = req;
    const user = await _authService.signUp(body);

    return res.status(201).json(user);
  }

  async singIn(req, res) {
    const { body } = req;
    const signInResponse = await _authService.signUp(body);

    return res.status(200).json(signInResponse);
  }
}
