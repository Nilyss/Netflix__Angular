const User = require('../model/user')

module.exports.signUp = (req, res) => {
  console.log('req body', req.body)
  const user = new User({
    email: req.body.email,
    password: req.body.password,
  })
  user
    .save()
    .then((_) => res.status(201).json({ message: 'User has been created' }))
    .catch((error) =>
      res
        .status(400)
        .json({ message: `User creation failed, error : ${error}` })
    )
}
