const {
  isValidUser,
} = require('../../middleware/authentication/authentication')
const multer = require('../../middleware/multer/multer.config')

const router = require('express').Router()

// import user controllers
const { userSignUp } = require('../../controller/user/userSignUp')
const { userLogin } = require('../../controller/user/userLogin')
const { userLogout } = require('../../controller/user/userLogout')
const { userFindAll } = require('../../controller/user/userFindAll')
const { userFindOne } = require('../../controller/user/userFindOne')
const { userUpdateOne } = require('../../controller/user/userUpdateOne')
const { userDeleteOne } = require('../../controller/user/userDeleteOne')

const baseRoute = '/api/users'
router.post(baseRoute + '/signup', userSignUp)
router.post(baseRoute + '/login', userLogin)
router.get(baseRoute + '/logout', userLogout)
router.get(baseRoute + '/', userFindAll)
router.get(baseRoute + '/:id', userFindOne)
router.put(baseRoute + '/update/:id', isValidUser, multer, userUpdateOne)
router.delete(baseRoute + '/delete/:id', isValidUser, userDeleteOne)

module.exports = router
