const User = require('../../model/user/user')

// response and logs messages
const messageError = `Can't find users for now, table is empty`
const messageSuccess = 'Users list find'
const serverError = "Can't find users, please try again later"

module.exports.userFindAll = async (req, res) => {
  try {
    const users = await User.find().select('-password')
    if (!users) {
      console.log(messageError, users)
      return res.status(400).json({ messageError, users })
    }
    console.log(messageSuccess, users)
    res.status(200).json({ messageSuccess, users })
  } catch (error) {
    console.log(serverError)
    res.status(500).json({ serverError })
  }
}
