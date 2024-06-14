const router = require('express').Router()
const { 
    allUsers,
    findUser,
    updateUser
} = require('../controllers/userController')
const isAuthenticated = require('../middleware/auth')

router.get('/', allUsers)
router.get('/:id', findUser)
router.put('/:id', isAuthenticated, updateUser)

module.exports = router