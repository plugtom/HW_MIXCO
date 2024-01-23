require("dotenv").config();
const express = require("express");
const cors = require("cors");

const errorHandler = require("./middlewares/error");
const notFoundHandler = require("./middlewares/not-found");
const createError = require("./utils/createError");

const authRoute = require("./routes/auth-routes");
const productRoute = require("./routes/product-route")

const app = express();

app.use(cors());
app.use(express.json());

app.use("/auth", authRoute);
app.use("/product", productRoute);
console.log("test")

app.use(errorHandler);
app.use("*", notFoundHandler);

const port = process.env.PORT;
app.listen(port, () => {
  console.log("Server run on port" + " " + port);
});