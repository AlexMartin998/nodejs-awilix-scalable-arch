import { Router } from 'express';

export default function ({ UserController }) {
  const router = Router();

  router.get('/:id', UserController.findOne);
  router.get('', UserController.findAll);
  router.patch('/:id', UserController.update);
  router.delete('/:id', UserController.remove);

  return router;
}
