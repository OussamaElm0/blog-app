const router = require('express').Router()
const { 
    allUsers,
    findUser,
} = require('../controllers/userController')

router.get('/', allUsers)
router.get('/:id', findUser)

module.exports = router