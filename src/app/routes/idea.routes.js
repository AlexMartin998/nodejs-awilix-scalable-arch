const { Router } = require('express');

const { CAHCE_TIME } = require('../../utils/constants');
const { cacheMiddleware, parseIntMiddleware } = require('../middlewares');

module.exports = function ({ IdeaController }) {
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
};
