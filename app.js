require('dotenv').config()
const express = require('express')
const app = express()

const PORT = 3500

const cors = require('cors')
const mongoose = require('mongoose')

const flightRouter = require('./routes/flightRouter')
const validateflightRouter = require('./routes/validateflightRouter')

const userRouter = require('./routes/userRouter')
const validateuserRouter = require('./routes/validateuserRouter')

app.use(cors())
app.use(express.json())

app.use('/api/v1/flight',flightRouter)
app.use('/api/v1/flight/validate',validateflightRouter)

app.use('/api/v1/user',userRouter)
app.use('/api/v1/user/validate',validateuserRouter)

mongoose.connect(process.env.DB_URL)
const db = mongoose.connection
db.on('error',(errorMessage)=> console.log(errorMessage))
db.once('open',()=>console.log('Connected successfully to database'))


app.listen(PORT,console.log(`Server listening at http://localhost:${PORT}/api/v1/flight`))
