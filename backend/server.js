const express = require('express')
const app = express()
const port = process.env.PORT || 4000
const mongoose = require('mongoose')
const db_connection =
  process.env.DB_CONNECTION || "mongodb://127.0.0.1:27017/blog-app";

mongoose.connect(db_connection)
    .then(() => app.listen(port,console.log(`Server is running on port ${port}`)))
    .catch(e => console.log(e.message))