const { Router } = require('express');

const { idRules, parseIntMiddleware } = require('../middlewares/index.js');

module.exports = function ({ UserController }) {
  const router = Router();

  router.get('/:id', [...idRules()], UserController.findOne);
  router.get('', [parseIntMiddleware], UserController.findAll);
  router.patch('/:id', [...idRules()], UserController.update);
  router.delete('/:id', [...idRules()], UserController.remove);

  return router;
};
