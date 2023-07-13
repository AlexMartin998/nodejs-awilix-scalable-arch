import { connect } from 'mongoose';

import { container } from '../config/container.js';

export const dbConnection = async () => {
  try {
    const db = await connect(container.resolve('config').MONGO_URI);
    console.log('DB connectect to:', db.connection.name);
  } catch (err) {
    console.log(err);
    throw new Error('Error from inicialized db');
  }
};
