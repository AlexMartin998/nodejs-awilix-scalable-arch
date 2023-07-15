import jwt from 'jsonwebtoken';

import { Logger } from './../Logger.js';
import config from '../../config/index.js';

export const generateJWT = id => {
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
