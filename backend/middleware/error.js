const ErrorHander = require("../utils/errorhander");

module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode || 400;
  err.message = err.message || "internal server error";

  //Wrong mongodb id error
  if (err.name === "CastError") {
    const message = `Resource not found. Invalid: ${err.path}`;
    err = new ErrorHander(message, 400);
  }

  //Mongoose duplicate key error
  if (err.code === 11000) {
    const message = `Duplicate ${Object.keys(err.keyValue)} Entered`;
    err = new ErrorHander(message, 400);
  }

  //Wrong JWT error
  if (err.name === "jsonWebTokenError") {
    const message = `json web Token is invalid, Try again`;
    err = new ErrorHander(message, 400);
  }

  if (err.name === "TokenExiredError") {
    const message = `json erb Toke is expired, Try again`;
    err = new ErrorHander(message, 400);
  }

  res.status(err.statusCode).json({
    success: false,
    message: err.message,
  });
};
