import { Router } from 'express';
import { protectWithJwt, validateMongoId } from '../middlewares/index.js';

export default function ({ CommentController }) {
  const router = Router();

  router.get('/:id/unique', CommentController.findOne);
  router.get('/:ideaId', CommentController.findAllByIdeaId);
  router.post(
    '/:ideaId',
    [protectWithJwt, validateMongoId('ideaId')],
    CommentController.createIdeaComment
  );
  router.patch('/:id', CommentController.update);
  router.delete('/:id', CommentController.remove);

  return router;
}
