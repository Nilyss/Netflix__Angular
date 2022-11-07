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
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  preflightContinue: false,
}
const {
  isAccessGranted,
  isValidUser,
} = require('./middleware/authentication/authentication')

const app = express()
port = parseInt(process.env.PORT, 10) || 8800

// db
require('./db/mongoose')(app)

// routes
const userRoute = require('./routes/user/user')

// middlewares
app
  .use(morgan('dev'))
  .use(cors(corsOptions))
  .use(express.json())
  .use(cookieParser())
  .use(userRoute)

// Verify token
app.get('*', isValidUser)
app.get('/api/jwtid', isAccessGranted)

// starting app
app.listen(port, () =>
  console.log(
    `Server is listening on port ${port}, the API base URL is http://localhost:${port}/api/`
  )
)
