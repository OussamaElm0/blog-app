const mongoose = require("mongoose");
require("dotenv").config();

// Temporary measure for testing the connection
const db_connection =
  process.env.DB_CONNECTION ;

const connectDatabase = () => {
  mongoose
    .connect(db_connection)
    .then(() => console.log("MongoDB connected with server"))
    .catch((e) => console.log(e.message));
};

module.exports = connectDatabase;
