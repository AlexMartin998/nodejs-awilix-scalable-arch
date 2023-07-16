const authMiddleware = require('./auth.middleware');
const validatorMiddleware = require('./validator.middleware.js');

module.exports = {
  cacheMiddleware: require('./cache.middleware'),
  errorMiddleware: require('./error.middleware'),
  notFoundMiddleware: require('./not-found.middleware'),
  parseIntMiddleware: require('./parse-int.middleware'),

  ...validatorMiddleware,
  ...authMiddleware,
};
