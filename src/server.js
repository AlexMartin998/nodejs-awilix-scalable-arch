import compression from 'compression';
import cors from 'cors';
import express from 'express';
import 'express-async-errors';
import helmet from 'helmet';
import morgan from 'morgan';

import {
  errorMiddleware,
  notFoundMiddleware,
} from './app/middlewares/index.js';
import { dbConnection } from './data/db.js';
import { Logger } from './utils/Logger.js';

export class Server {
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
