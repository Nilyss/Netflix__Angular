const User = require('../../model/user/user')

module.exports.signUp = (req, res) => {
  const user = new User({
    email: req.body.email,
    password: req.body.password,
  })
  user
    .save()
    .then(() => res.status(201).json({ message: 'User has been created' }))
    .catch((error) =>
      res
        .status(400)
        .json({ message: `User creation failed, error : ${error}` })
    )
}
