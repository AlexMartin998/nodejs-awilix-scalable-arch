import express from 'express';

export default function ({
  HomeRoutes,
  UserRoutes,
  IdeaRoutes,
  CommentRoutes,
  AuthRoutes,
}) {
  const router = express.Router();
  const apiRoutes = express.Router();

  apiRoutes.use('/auth', AuthRoutes);
  apiRoutes.use('/home', HomeRoutes);
  apiRoutes.use('/users', UserRoutes);
  apiRoutes.use('/ideas', IdeaRoutes);
  apiRoutes.use('/comments', CommentRoutes);

  router.use('/v1/api', apiRoutes);

  return router;
}
