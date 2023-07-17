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

export const validateMongoId = (paramString = 'id') => [
  param(paramString, 'Invalid ID').isMongoId(),
  validate,
];

export const idRules = () => [...validateMongoId(), validate];

// Auth
const emailPassRules = () => [
  body('email', 'Invalid email').isEmail(),
  body('password', 'Password must be longer than 6 characters').isLength({
    min: 6,
  }),
];

export const signUpRules = () => {
  return [
    body('name', 'Invalid name').notEmpty(),
    body('username', 'Invalid username').notEmpty(),
    ...emailPassRules(),
    validate,
  ];
};

export const loginRules = () => [...emailPassRules(), validate];
