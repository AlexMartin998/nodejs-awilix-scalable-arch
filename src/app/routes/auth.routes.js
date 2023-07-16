import { Router } from 'express';

import { loginRules, signUpRules } from '../middlewares/index.js';

export default function ({ AuthController }) {
  const router = Router();

  router.post('/signup', [...signUpRules()], AuthController.signUp);
  router.post('/signin', [...loginRules()], AuthController.signIn);

  return router;
}
