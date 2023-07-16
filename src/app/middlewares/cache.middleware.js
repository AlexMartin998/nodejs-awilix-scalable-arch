const mcache = require('memory-cache');

const config = require('./../../config');

module.exports = function (duration) {
  return (req, res, next) => {
    const key = config.CACHE_KEY + req.originUrl || req.url;
    const cachedBody = mcache.get(key);

    if (cachedBody) {
      console.log('CACHEADO');
      return res.send(JSON.parse(cachedBody));
    } else {
      // La cacheamos
      console.log('A CACHEAR');

      res.sendResponse = res.send;
      res.send = body => {
        mcache.put(key, body, duration * 1000);
        res.sendResponse(body);
      };

      next();
    }
  };
};
