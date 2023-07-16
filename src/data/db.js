const { connect } = require('mongoose');

const { Logger } = require('../utils');
const config = require('./../config');

const dbConnection = async () => {
  try {
    const db = await connect(config.MONGO_URI);
    Logger.log(`DB connectect to: ${db.connection.name}`);
  } catch (err) {
    Logger.error(err);
    throw new Error('Error from inicialized db');
  }
};

module.exports = dbConnection;
