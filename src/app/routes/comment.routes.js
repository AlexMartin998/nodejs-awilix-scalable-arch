import { Router } from 'express';

export default function ({ CommentController }) {
  const router = Router();

  router.get('/:id/unique', CommentController.findOne);
  router.get('/:ideaId', CommentController.findAllByIdeaId);
  router.post('/:ideaId', CommentController.findAllByIdeaId);
  router.patch('/:id', CommentController.update);
  router.delete('/:id', CommentController.remove);

  return router;
}
