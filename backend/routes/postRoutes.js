const router = require('express').Router()
const {
    index,
    createPost,
} = require('../controllers/postController')
const isAuthenticated = require('../middleware/auth')

router.get('/', index)
router.post("/store", isAuthenticated, createPost);

module.exports = router