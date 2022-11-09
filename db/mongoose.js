const dotenv = require('dotenv') // Environment variable https://www.npmjs.com/package/dotenv
dotenv.config()
const mongoose = require('mongoose') // https://www.npmjs.com/package//mongoose

module.exports = () => {
  mongoose.connect(
    `mongodb+srv://${process.env.USER_DB_NAME}:${process.env.USER_DB_PASSWORD}@${process.env.CLUSTERNAME}/?retryWrites=true&w=majority`,
    (err) => {
      if (!err) {
        console.log('Successfully connected to DB')
      }
      if (err) {
        console.log('Connexion to DB failed')
      }
    }
  )
}
