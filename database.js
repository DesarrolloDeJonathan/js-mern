const mongoose = require("mongoose");
require("dotenv").config();

const PORT = process.env.PORT || 9000;

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("DATABASE CONNECT"))
  .catch((e) => console.error(e));

module.exports = mongoose;
