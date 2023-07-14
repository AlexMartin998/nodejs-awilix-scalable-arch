import { asClass, asFunction, asValue, createContainer } from 'awilix';

import { HomeController } from '../app/controllers/index.js';
import { HomeRoutes, routerApp } from '../app/routes/index.js';
import { Server } from '../server.js';
import { HomeService } from './../app/services/index.js';
import { Comment, Idea, User } from './../data/models/index.js';
import config from './index.js';

const container = createContainer();

container
  .register({
    Server: asClass(Server).singleton(),
    router: asFunction(routerApp).singleton(),
    config: asValue(config),
  })
  .register({
    HomeService: asClass(HomeService).singleton(),
  })
  .register({
    HomeController: asClass(HomeController.bind(HomeController)).singleton(),
  })
  .register({
    HomeRoutes: asFunction(HomeRoutes).singleton(),
  })
  .register({
    User: asValue(User),
    Comment: asValue(Comment),
    Idea: asValue(Idea),
  });

export { container };
