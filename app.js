const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')

const app = express()
const port = 8000

// db
require('./db/mongoose')(app)

// routes
const userRoute = require('./routes/user')

app.use(morgan('dev')).use(bodyParser.json()).use(userRoute)

// starting server
app.listen(port, () =>
  console.log(`server start on port : http://localhost:${port}/`)
)
