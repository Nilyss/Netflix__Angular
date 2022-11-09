const User = require('../../model/user/user')

// response and logs messages
const successMessage = 'User find'
const errorMessage = "Can't find User :"
const serverError = "Can't find user, please try again later"

module.exports.userFindOne = async (req, res) => {
  const paramsId = req.params.id
  try {
    await User.findOne({ _id: paramsId })
      .select('-password')
      .then((user) => {
        if (!user) {
          console.log(errorMessage, paramsId)
          return res.status(400).json({ errorMessage })
        }
        console.log(successMessage, user)
        res.status(200).json(user)
      })
  } catch (error) {
    console.log(serverError)
    res.status(500).json(serverError)
  }
}
