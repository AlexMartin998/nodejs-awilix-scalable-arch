import { asClass, asFunction, asValue, createContainer } from 'awilix';

import {
  CommentController,
  HomeController,
  IdeaController,
  UserController,
} from '../app/controllers/index.js';
import {
  CommentRoutes,
  HomeRoutes,
  IdeaRoutes,
  UserRoutes,
  routerApp,
} from '../app/routes/index.js';
import { Server } from '../server.js';
import {
  AuthService,
  CommentService,
  HomeService,
  IdeaService,
  UserService,
} from './../app/services/index.js';
import { Comment, Idea, User } from './../data/models/index.js';
import {
  CommentRepository,
  IdeaRepository,
  UserRepository,
} from './../data/repositories/index.js';
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
    CommentService: asClass(CommentService).singleton(),
    IdeaService: asClass(IdeaService).singleton(),
    UserService: asClass(UserService).singleton(),
    AuthService: asClass(AuthService).singleton(),
  })
  .register({
    HomeController: asClass(HomeController.bind(HomeController)).singleton(),
    CommentController: asClass(
      CommentController.bind(CommentController)
    ).singleton(),
    IdeaController: asClass(IdeaController.bind(IdeaController)).singleton(),
    UserController: asClass(UserController.bind(UserController)).singleton(),
  })
  .register({
    HomeRoutes: asFunction(HomeRoutes).singleton(),
    UserRoutes: asFunction(UserRoutes).singleton(),
    IdeaRoutes: asFunction(IdeaRoutes).singleton(),
    CommentRoutes: asFunction(CommentRoutes).singleton(),
  })
  .register({
    User: asValue(User),
    Comment: asValue(Comment),
    Idea: asValue(Idea),
  })
  .register({
    UserRepository: asClass(UserRepository).singleton(),
    CommentRepository: asClass(CommentRepository).singleton(),
    IdeaRepository: asClass(IdeaRepository).singleton(),
  });

export { container };
