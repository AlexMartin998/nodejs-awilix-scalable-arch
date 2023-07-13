import compression from 'compression';
import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';

import {
  errorMiddleware,
  notFoundMiddleware,
} from './app/middlewares/index.js';
import { dbConnection } from './data/db.js';

export class Server {
  #app;
  #config;

  constructor({ config, router }) {
    this.#app = express().use(router);
    this.#config = config;
    this.connectToDB();
    this.middlewares();
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

    this.#app.use(notFoundMiddleware);
    this.#app.use(errorMiddleware);
  }

  listen() {
    this.#app.listen(this.#config.PORT, () => {
      console.log(
        `${this.#config.APPLICATION_NAME} API is running on PORT ${
          this.#config.PORT
        }`
      );
    });
  }
}
