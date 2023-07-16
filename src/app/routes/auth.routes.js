import { Router } from 'express';

import { signUpRules } from '../middlewares/index.js';

export default function ({ AuthController }) {
  const router = Router();

  router.post('/signup', [...signUpRules()], AuthController.signUp);
  router.post('/signin', AuthController.signIn);

  return router;
}
