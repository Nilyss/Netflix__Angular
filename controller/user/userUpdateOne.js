const User = require('../../model/user/user')
const fs = require('fs')

// response and logs messages
const successMessage = 'User updated'
const errorMessage = "Can't update User :"
const serverError = "Can't update user, please try again later"

module.exports.userUpdateOne = async (req, res) => {
  try {
    console.log('req body =>', req.body)
    const paramsId = req.params.id

    // If the update contain a new profile picture, delete the old one
    if (req.file !== undefined) {
      User.findOne({ _id: paramsId }).then((user) => {
        user.profiles.find((profiles) => {
          if (profiles._id == req.body._id) {
            const profile = profiles
            const fileName = profile.profilePicture.split('/uploads/images')[1]
            fs.unlink(`uploads/images/${fileName}`, () => {
              console.log('old profile picture deleted')
            })
          }
        })
      })
    }

    const userObject = req.file
      ? {
          ...req.body,
          isChild: req.body.isChild === 'true',
          isAccountAdmin: req.body.isAccountAdmin === 'true',
          profilePicture: `${req.protocol}://${req.get(
            'host'
          )}/uploads/images/${req.file.filename}`,
        }
      : { ...req.body }
    await User.updateOne(
      { _id: userObject._id },
      {
        $set: {
          profiles: { ...userObject },
        },
      },
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
