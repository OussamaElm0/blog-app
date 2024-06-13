const router = require('express').Router()
const {
    index,
    createPost,
    findPost,
    findByTags,
    updatePost
} = require('../controllers/postController')
const isAuthenticated = require('../middleware/auth')

router.get('/', index)
router.post("/", isAuthenticated, createPost);
router.get("/:id", findPost);
router.post("/tags", findByTags);
router.patch("/:id", isAuthenticated, updatePost);

module.exports = router