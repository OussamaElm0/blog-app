const mongoose = require('mongoose')
const db_connection =
  process.env.DB_CONNECTION || "mongodb://127.0.0.1:27017/blog-app";

const connectDatabase = () => {
    mongoose
      .connect(db_connection)
      .then(console.log("Mongo DB connected with server"))
      .catch((e) => console.log(e.message));
}

module.exports = connectDatabase