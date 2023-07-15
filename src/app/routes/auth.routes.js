import { Router } from 'express';

export default function ({ AuthController }) {
  const router = Router();

  router.post('/signup', AuthController.signUp);
  router.post('/signin', AuthController.signIn);

  return router;
}
