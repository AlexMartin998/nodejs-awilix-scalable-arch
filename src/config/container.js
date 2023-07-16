const { asClass, asFunction, asValue, createContainer } = require('awilix');

const {
  AuthController,
  CommentController,
  HomeController,
  IdeaController,
  UserController,
} = require('../app/controllers');
const {
  CommentRoutes,
  HomeRoutes,
  IdeaRoutes,
  UserRoutes,
  routerApp,
  AuthRoutes,
} = require('../app/routes');
const Server = require('../server.js');
const {
  AuthService,
  CommentService,
  HomeService,
  IdeaService,
  UserService,
} = require('./../app/services');
const { Comment, Idea, User } = require('./../data/models');
const {
  CommentRepository,
  IdeaRepository,
  UserRepository,
} = require('./../data/repositories');
const config = require('./');

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
    AuthController: asClass(AuthController.bind(AuthController)).singleton(),
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
    AuthRoutes: asFunction(AuthRoutes).singleton(),
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

module.exports = container;
