module.exports.userLogout = (req, res) => {
  // response and logs messages
  const disconnectFailure = 'User already disconnected: no token provided'
  const disconnectSuccessful =
    'User is now disconnect, and his token get removed'
  const disconnectFailureServer =
    "Can't get response from server, please try again later"

  try {
    if (!req.cookies.jwt) {
      console.log(disconnectFailure)
      return res.status(401).json(disconnectFailure)
    }
    res.cookie('jwt', '', { maxAge: 1 })
    console.log(disconnectSuccessful)
    res.status(200).json(disconnectSuccessful)
  } catch (error) {
    console.log(error, disconnectFailureServer)
    res.status(500).json(disconnectFailureServer)
  }
}
