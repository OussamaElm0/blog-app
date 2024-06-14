const router = require('express').Router()
const { 
    allUsers,
    findUser,
    updateUser,
    deleteUser,
} = require('../controllers/userController')
const isAuthenticated = require('../middleware/auth')

router.get('/', allUsers)
router.get('/:id', findUser)
router.put('/:id', isAuthenticated, updateUser)
router.delete('/:id', isAuthenticated, deleteUser)

module.exports = router