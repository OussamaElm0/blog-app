const router = require('express').Router()
const { 
    allUsers
} = require('../controllers/userController')

router.get('/', allUsers)

module.exports = router