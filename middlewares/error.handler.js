function logErrors (error, req, res, next) {
  console.log(error);
  next(error);
}

function errorHandler(error, req, res, next) {
  if (error) {
    res.status(500).json({
      message: error.message,
      stack: error.stack
    })
  } else {
    next();
  }
}

function boomErrorHandler(error, req, res, next) {
  if (error.isBoom) {
    const { output } = error;
    res.status(output.statusCode).json(output.payload);
  } else {
    next(error);
  }
}

module.exports = {
  logErrors,
  errorHandler,
  boomErrorHandler
}
