import jwt from 'jsonwebtoken';

import { container } from '../../config/container.js';
import config from '../../config/index.js';
import { Logger } from '../../utils/Logger.js';

export const protectWithJwt = async (req, res, next) => {
  const bearerToken = req.header('Authorization');
  if (!bearerToken || !bearerToken.startsWith('Bearer'))
    return res.status(401).json({ message: ['Invalid token'] });

  const tokenJwt = bearerToken.split(' ')[1];

  try {
    const { id } = jwt.verify(tokenJwt, config.JWT_SECRET);
    const userService = container.resolve('UserService');
    const user = await userService.findOne(id);
    // if (!user)
    //   return res.status(401).json({ ok: false, msg: 'Invalid token!' });

    req.authenticatedUser = user;

    return next();
  } catch (error) {
    Logger.error('Error while creating the JWT');
    Logger.error(JSON.stringify(error));
    return res.status(401).json({ message: ['Invalid token'] });
  }
};
