import { Router } from 'express';

export default function ({ HomeController }) {
  const router = Router();

  router.get('/', HomeController.index);

  return router;
}
