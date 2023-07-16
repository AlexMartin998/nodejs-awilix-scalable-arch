import { Router } from 'express';
import { CAHCE_TIME } from '../../utils/index.js';
import { cacheMiddleware, parseIntMiddleware } from '../middlewares/index.js';

export default function ({ IdeaController }) {
  const router = Router();

  router.get('/:id', IdeaController.findOne);
  router.get(
    '',
    [parseIntMiddleware, cacheMiddleware(CAHCE_TIME.ONE_HOUR)],
    IdeaController.findAll
  );
  router.get('/:userId/all', IdeaController.findAllByAuthor);
  router.post('', IdeaController.create);
  router.patch('/:id', IdeaController.update);
  router.delete('/:id', IdeaController.remove);

  router.post(':id/upvote', IdeaController.upVoteIdea);
  router.post(':id/downvote', IdeaController.downVoteIdea);

  return router;
}
