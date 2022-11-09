const User = require('../../model/user/user')

// response and logs messages
const messageError = `Can't find users for now, table is empty`
const messageSuccess = 'Users list found'
const serverError = "Can't find users, please try again later"

module.exports.userFindAll = async (req, res) => {
  try {
    await User.find()
      .select('-password')
      .then((users) => {
        if (!users) {
          console.log(messageError, users)
          return res.status(400).json(messageError)
        }
        console.log(messageSuccess, users)
        res.status(200).json(users)
      })
  } catch (error) {
    console.log(serverError)
    res.status(500).json(serverError)
  }
}
