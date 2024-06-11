const express = require('express')
const app = express()
const port = process.env.PORT || 4000
const connectDatabase = require('./config/database')

const userRoutes = require('./routes/userRoutes')

//Connect the server with database
connectDatabase()

app.listen(port, console.log(`Server is running on port ${port}`))


app.use(express.json())

//Routes of the application
app.use('/api',userRoutes)