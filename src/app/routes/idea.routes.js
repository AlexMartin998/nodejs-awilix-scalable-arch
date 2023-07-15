import { Router } from 'express';

export default function ({ IdeaController }) {
  const router = Router();

  router.get('/:id', IdeaController.findOne);
  router.get('', IdeaController.findAll);
  router.get('/:userId/all', IdeaController.findAllByAuthor);
  router.post('', IdeaController.create);
  router.patch('/:id', IdeaController.update);
  router.delete('/:id', IdeaController.remove);

  router.post(':id/upvote', IdeaController.upVoteIdea);
  router.post(':id/downvote', IdeaController.downVoteIdea);

  return router;
}
