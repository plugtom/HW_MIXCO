const errorHandler = (err, req, res, next) => {
    console.log(err);
    res
      .status(err.statusCode || 500)
      .json({ message: err?.message || "Internal server error" });
  };
  
  module.exports = errorHandler;
  