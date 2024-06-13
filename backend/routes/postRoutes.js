const router = require('express').Router()
const {
    index,
    createPost,
    findPost
} = require('../controllers/postController')
const isAuthenticated = require('../middleware/auth')

router.get('/', index)
router.post("/", isAuthenticated, createPost);
router.get("/:id", findPost);

module.exports = router