import { connect } from 'mongoose';

import { container } from '../config/container.js';
import { Logger } from '../utils/index.js';

export const dbConnection = async () => {
  try {
    const db = await connect(container.resolve('config').MONGO_URI);
    Logger.log(`DB connectect to: ${db.connection.name}`);
  } catch (err) {
    Logger.error(err);
    throw new Error('Error from inicialized db');
  }
};
