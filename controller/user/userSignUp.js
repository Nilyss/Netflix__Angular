const User = require('../../model/user/user')

// response and logs messages
const messageSuccess = 'account successfully created'
const serverError = "Can't create account, please try again later"

module.exports.userSignUp = async (req, res) => {
  const { email, password } = req.body

  const user = await new User({ email, password })
  try {
    user
      .save()
      .then(() => {
        console.log({ messageSuccess, data: user })
        res.status(201).json({ messageSuccess, data: user })
      })
      .catch((error) => {
        const messageError = `User creation failed, error : ${error}`
        console.log(messageError)
        res.status(400).json({ messageError })
      })
  } catch (error) {
    console.log(serverError)
    res.status(500).json({ serverError })
  }
}
