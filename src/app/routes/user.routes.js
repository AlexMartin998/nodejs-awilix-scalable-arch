import { Router } from 'express';

import { idRules } from '../middlewares/index.js';

export default function ({ UserController }) {
  const router = Router();

  router.get('/:id', [...idRules()], UserController.findOne);
  router.get('', UserController.findAll);
  router.patch('/:id', [...idRules()], UserController.update);
  router.delete('/:id', [...idRules()], UserController.remove);

  return router;
}
