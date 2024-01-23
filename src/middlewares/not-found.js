const notFoundHandler = (req, res, next) => {
    res.status(404).json({ message: "NOt Foundr" });
  };
  
  module.exports = notFoundHandler;
  