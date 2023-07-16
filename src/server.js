const compression = require('compression');
const cors = require('cors');
const express = require('express');
require('express-async-errors');
const helmet = require('helmet');
const morgan = require('morgan');

const { errorMiddleware, notFoundMiddleware } = require('./app/middlewares');
const dbConnection = require('./data/db.js');
const { Logger } = require('./utils');

class Server {
  #app;
  #config;

  constructor({ config, router }) {
    this.#app = express();
    this.#config = config;
    this.connectToDB();
    this.middlewares();
    this.#app.use(router); // set app router
    this.finalMiddlewares();
  }

  async connectToDB() {
    await dbConnection();
  }

  middlewares() {
    console.clear(); // remove it

    this.#app
      .use(cors())
      .use(express.json())
      .use(helmet())
      .use(compression())
      .use(morgan('dev'));
  }

  finalMiddlewares() {
    this.#app.use(notFoundMiddleware);
    this.#app.use(errorMiddleware);
  }

  listen() {
    this.#app.listen(this.#config.PORT, () => {
      Logger.log(
        `${this.#config.APPLICATION_NAME} API is running on PORT ${
          this.#config.PORT
        }`
      );
    });
  }
}

module.exports = Server;
