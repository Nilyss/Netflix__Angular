const User = require('../../model/user/user')

// response and logs messages
const successMessage = 'User updated'
const errorMessage = "Can't update User :"
const serverError = "Can't update user, please try again later"

module.exports.userUpdateOne = async (req, res) => {
  try {
    const paramsId = req.params.id
    const userObject = {
      _id: paramsId,
      email: req.body.email,
      phoneNumber: req.body.phoneNumber,
      postalAddress: req.body.postalAddress,
      profiles: req.body.profiles,
      isWebsiteAdmin: req.body.isWebsiteAdmin,
    }
    await User.updateOne(
      { _id: paramsId },
      { ...userObject, _id: paramsId },
      {
        timestamps: { createdAt: true, updatedAt: false },
      }
    ).then((updateStatus) => {
      if (updateStatus.modifiedCount === 0) {
        console.log(errorMessage, updateStatus)
        return res.status(400).json(errorMessage)
      }
      console.log(updateStatus, successMessage)
      res.status(201).json(updateStatus)
    })
  } catch (error) {
    console.log(serverError, error)
    res.status(500).json(serverError)
  }
}
