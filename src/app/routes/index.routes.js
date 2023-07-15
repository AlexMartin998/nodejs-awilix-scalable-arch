import express from 'express';
import 'express-async-errors';

export default function ({ HomeRoutes, UserRoutes }) {
  const router = express.Router();
  const apiRoutes = express.Router();

  apiRoutes.use('/home', HomeRoutes);
  apiRoutes.use('/users', UserRoutes);

  router.use('/v1/api', apiRoutes);
  return router;
}
