const express = require('express')
const app = express()
const port = process.env.PORT || 4000
const connectDatabase = require('./config/database')
const cookieParser = require('cookie-parser')
const cors = require('cors')

const authRoutes = require('./routes/authRoutes')
const postRoutes = require('./routes/postRoutes')
const userRoutes = require('./routes/userRoutes')

//Connect the server with database
connectDatabase()

app.listen(port, console.log(`Server is running on port ${port}`))


app.use(express.json())
app.use(cookieParser())
app.use(cors())

//Routes of the application
app.use('/api/auth',authRoutes)
app.use('/api/users',userRoutes)
app.use('/api/posts',postRoutes)