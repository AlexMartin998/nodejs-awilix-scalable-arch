export default (err, _req, res) => {
  const httpStatus = err.status || 500;

  return res.status(httpStatus).send({
    status: httpStatus,
    message: err.message || 'Internal server error',
  });
};
