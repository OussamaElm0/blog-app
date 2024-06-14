const router = require('express').Router()
const {
    register,
    login,
    logout
} = require('../controllers/authController')
const isAuthenticated = require('../middleware/auth')

router.post('/register',register)
router.post('/login',login)
router.get('/logout', isAuthenticated,logout)

module.exports = router