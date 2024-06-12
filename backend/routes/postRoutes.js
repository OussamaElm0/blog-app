const router = require('express').Router()
const {
    index
} = require('../controllers/postController')

router.get('/', index)

module.exports = router