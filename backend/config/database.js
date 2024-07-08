const mongoose = require("mongoose");
require("dotenv").config();

// Temporary measure for testing the connection
const db_connection =
  process.env.DB_CONNECTION || "mongodb://localhost:27017/blog-app" ;

const connectDatabase = () => {
  mongoose
    .connect(db_connection, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    })
    .then(() => console.log("MongoDB connected with server"))
    .catch((e) => console.log(e.message));
};

module.exports = connectDatabase;
