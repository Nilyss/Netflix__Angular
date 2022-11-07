const jwt = require('jsonwebtoken')
const privateKey = `${process.env.JWT_KEY}`
const User = require('../../model/user/user')

module.exports.createToken = (id) => {
  const maxAge = 3 * 24 * 60 * 60 * 1000 // 3 days
  return jwt.sign({ id }, privateKey, {
    expiresIn: maxAge,
  })
}

module.exports.isValidUser = (req, res, next) => {
  const token = req.cookies.jwt
  if (token) {
    jwt.verify(token, process.env.JWT_KEY, async (error, decodedToken) => {
      if (error) {
        res.locals.user = null
        res.cookie('jwt', '', { maxAge: 1 })
        next()
      } else {
        const user = await User.findById(decodedToken.id)
        res.locals.user = user
        next()
      }
    })
  } else {
    res.locals.user = null
    next()
  }
}

module.exports.isAccessGranted = (req, res, next) => {
  const token = req.cookies.jwt
  if (token) {
    jwt.verify(token, process.env.JWT_KEY, async (error, decodedToken) => {
      if (error) {
        const message = 'Wrong token provided, access forbidden'
        console.log(error, message)
        return res.status(401).json({ message })
      } else {
        const message = 'Access granted for user id:'
        const userId = res.locals.user._id
        console.log(message, decodedToken.id)
        res.status(200).json({ message, userId })
        next()
      }
    })
  } else {
    const message = 'Access denied : No token provided'
    console.log(message)
    res.status(401).json({ message })
  }
}
