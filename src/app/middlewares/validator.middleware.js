import { param, validationResult, body } from 'express-validator';

const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const statusCode = 400;

    return res.status(statusCode).json({
      message: errors.array().map(error => error.msg),
      error: 'Bad Request',
    });
  }

  return next();
};

const validateMongoId = () => [param('id', 'Invalid ID').isMongoId(), validate];

export const idRules = collection => [
  ...validateMongoId(),

  param('id').custom((id, { req }) => idExistInDB(id, collection, req)),
  validate,
];
