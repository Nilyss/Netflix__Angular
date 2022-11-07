const bcrypt = require('bcrypt')
const User = require('../../model/user/user')
const {
  createToken,
} = require('../../middleware/authentication/authentication')

// response and logs messages
const messageError = 'Invalid authentication : wrong email or password'
const messageSuccess = 'Successfully connected, token granted'
const serverError = "Can't connect user, please try again later"

module.exports.login = async (req, res) => {
  const { email, password } = req.body

  try {
    await User.findOne({ email }).then((user) => {
      if (!user) {
        console.log(messageError)
        return res.status(401).json({ messageError, data: user })
      }

      bcrypt.compare(password, user.password).then((isValid) => {
        if (!isValid) {
          console.log(messageError)
          return res.status(401).json({ messageError, data: user })
        }

        const cookieMaxAge = 3 * 24 * 60 * 60 * 1000 // 3 days
        const token = createToken(user._id)

        // send token in cookies
        res.cookie('jwt', token, { httpOnly: true, maxAge: cookieMaxAge })
        console.log({ messageSuccess, userId: user._id })
        res.status(200).json({ messageSuccess, userId: user._id })
      })
    })
  } catch (error) {
    console.log(serverError)
    res.status(500).json({ serverError })
  }
}
