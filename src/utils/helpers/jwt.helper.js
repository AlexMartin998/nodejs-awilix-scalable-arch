const jwt = require('jsonwebtoken');

const config = require('../../config');
const Logger = require('./../Logger');

const generateJWT = id => {
  return new Promise((resolve, reject) => {
    jwt.sign({ id }, config.JWT_SECRET, { expiresIn: '24h' }, (err, token) => {
      if (err) {
        Logger.error(err);
        reject('JWT could not be generated');
      }

      resolve(token);
    });
  });
};

module.exports = {
  generateJWT,
};
