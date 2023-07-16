export default (err, _req, res, _next) => {
  const httpStatus = err.status || 500;

  return res.status(httpStatus).send({
    status: httpStatus,
    message: err.message || 'Internal server error',
  });
};
