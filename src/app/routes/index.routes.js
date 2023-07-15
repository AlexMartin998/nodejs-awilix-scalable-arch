import express from 'express';
import 'express-async-errors';

export default function ({
  HomeRoutes,
  UserRoutes,
  IdeaRoutes,
  CommentRoutes,
}) {
  const router = express.Router();
  const apiRoutes = express.Router();

  apiRoutes.use('/home', HomeRoutes);
  apiRoutes.use('/users', UserRoutes);
  apiRoutes.use('/ideas', IdeaRoutes);
  apiRoutes.use('/comments', CommentRoutes);

  router.use('/v1/api', apiRoutes);
  return router;
}
