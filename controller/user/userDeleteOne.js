const User = require('../../model/user/user')

// response and logs messages
const successMessage = 'User deleted'
const errorMessage = "This user doesn't exist, we can't delete user :"
const serverError = "Can't delete user, please try again later"

module.exports.userDeleteOne = async (req, res) => {
  const paramsId = req.params.id
  try {
    await User.findOne({ _id: paramsId })
      .select('-password')
      .then(async (user) => {
        if (!user) {
          console.log(errorMessage, paramsId)
          return res.status(400).json({ errorMessage, paramsId })
        }
        await User.deleteOne({ _id: paramsId })
          .then(() => {
            console.log(successMessage, paramsId)
            res.status(200).json({ successMessage, paramsId })
          })
          .catch((error) => {
            console.log(serverError, error)
            res.status(400).json({ serverError, error })
          })
      })
  } catch (error) {
    console.log(error, serverError)
    res.status(500).json({ error, serverError })
  }
}
