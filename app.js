const express = require('express')
const bodyParser = require('body-parser') // body parsing middleware  https://www.npmjs.com/package/body-parser
const morgan = require('morgan') // http middleware logger https://www.npmjs.com/package/morgan
const cors = require('cors') // cross origin request  https://www.npmjs.com/package/cors
const corsOptions = {
  origin: 'http://localhost:4200',
  credentials: true,
  allowedHeaders: ['sessionId', 'Content-Type'],
  exposedHeaders: ['sessionId'],
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  preflightContinue: false,
}

const app = express()
const port = 8000

// db
require('./db/mongoose')(app)

// routes
const userRoute = require('./routes/user/user')

app
  .use(morgan('dev'))
  .use(cors(corsOptions))
  .use(bodyParser.json())
  .use(userRoute)

// starting server
app.listen(port, () =>
  console.log(`server start on port : http://localhost:${port}/`)
)
