const router = require('express').Router()
const { signUp } = require('../controller/createUser')

const baseRoute = '/api/users'

router.post(baseRoute + '/signup', signUp)
router.get(baseRoute + '/login')

module.exports = router
