// ********** Imports **********
require('dotenv').config() // Environment variable https://www.npmjs.com/package/dotenv
const express = require('express')
const morgan = require('morgan') // http middleware logger https://www.npmjs.com/package/morgan
const cookieParser = require('cookie-parser') // https://www.npmjs.com/package/cookie-parser
const cors = require('cors') // cross origin request  https://www.npmjs.com/package/cors
const corsOptions = {
  origin: 'http://localhost:4200',
  credentials: true,
  allowedHeaders: ['sessionId', 'Content-Type'],
  exposedHeaders: ['sessionId'],
  methods: 'GET,HEAD,PUT,POST,DELETE',
  preflightContinue: false,
}
const {
  isAccessGranted,
  isValidUser,
} = require('./middleware/authentication/authentication')
const userRoute = require('./routes/user/user')

port = parseInt(process.env.PORT, 10) || 8800
baseUrl = process.env.BASE_URL + port + '/api'

//********** Init Server **********

const app = express()

// db
require('./db/mongoose')(app)

// middlewares
app
  // app config middlewares
  .use(morgan('dev'))
  .use(cors(corsOptions))
  .use(express.json())
  .use(cookieParser())
  // Verify Token
  .get('*', isValidUser)
  .get('/api/jwtid', isAccessGranted)
  // Routes
  .use(userRoute)

// starting app
app.listen(port, () =>
  console.log(
    `Server is listening on port ${port}, the API base URL is ${baseUrl}`
  )
)
