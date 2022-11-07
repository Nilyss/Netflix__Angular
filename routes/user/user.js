const router = require('express').Router()
const { signUp } = require('../../controller/user/createUser')

const { login } = require('../../controller/user/connectUser')
const { logout } = require('../../controller/user/disconnectUser')

const baseRoute = '/api/users'

router.post(baseRoute + '/signup', signUp)
router.post(baseRoute + '/login', login)
router.get(baseRoute + '/logout', logout)

module.exports = router
