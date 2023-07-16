const { Router } = require('express');

const { loginRules, signUpRules } = require('../middlewares');

module.exports = function ({ AuthController }) {
  const router = Router();

  router.post('/signup', [...signUpRules()], AuthController.signUp);
  router.post('/signin', [...loginRules()], AuthController.signIn);

  return router;
};
