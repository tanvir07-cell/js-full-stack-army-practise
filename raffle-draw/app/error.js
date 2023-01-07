const notFoundHandler = (_req, _res, next) => {
  const error = new Error("Resource not found");
  //   404 mane e holo jodi ami amar create kora routes gula chara onno routes e hit kori tahole "resource not found" eti dekahbe:
  error.status = 404;
  next(error);
};

const errorHandler = (error, _req, res, _next) => {
  if (error.status) {
    return res.status(error.status).json({
      message: error.message,
    });
  }
  //   500 hocceh server error;
  res.status(500).json({ message: "Server error something went wrong" });
};

module.exports = { notFoundHandler, errorHandler };
