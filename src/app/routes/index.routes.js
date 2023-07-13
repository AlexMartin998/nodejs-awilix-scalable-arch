import express from 'express';
import 'express-async-errors';

export default function ({ HomeRoutes }) {
  const router = express.Router();
  const apiRoutes = express.Router();

  apiRoutes.use('/home', HomeRoutes);

  router.use('/v1/api', apiRoutes);
  return router;
}
