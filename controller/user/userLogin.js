const bcrypt = require('bcrypt')
const User = require('../../model/user/user')
const {
  createToken,
} = require('../../middleware/authentication/authentication')

// response and logs messages
const messageError = 'Invalid authentication : wrong email or password'
const messageSuccess = 'Successfully connected, token granted'
const serverError = "Can't connect user, please try again later"

module.exports.userLogin = async (req, res) => {
  const { email, password } = req.body

  try {
    await User.findOne({ email }).then((user) => {
      if (!user) {
        console.log(messageError)
        return res.status(401).json(messageError)
      }

      bcrypt.compare(password, user.password).then((isValid) => {
        if (!isValid) {
          console.log(messageError)
          return res.status(401).json({ messageError })
        }

        const cookieMaxAge = 3 * 24 * 60 * 60 * 1000 // 3 days
        const token = createToken(user._id)

        // send token in cookies
        res.cookie('jwt', token, { httpOnly: true, maxAge: cookieMaxAge })
        const connectedUser = {
          id: user.id,
          email: user.email,
          phoneNumber: user.phoneNumber,
          postalAddress: user.postalAddress,
          profiles: user.profiles,
          isWebsiteAdmin: user.isWebsiteAdmin,
          createdAt: user.createdAt,
        }
        console.log(messageSuccess, connectedUser)
        res.status(200).json(messageSuccess)
      })
    })
  } catch (error) {
    console.log(serverError)
    res.status(500).json(serverError)
  }
}
