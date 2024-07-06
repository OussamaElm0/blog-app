const router = require('express').Router()
const {
    register,
    login,
    logout,
    checkLogedUser
} = require('../controllers/authController')
const isAuthenticated = require('../middleware/auth')

router.post('/register',register)
router.post('/login',login)
router.get('/logout', isAuthenticated,logout)
router.get('/check', checkLogedUser)

module.exports = router