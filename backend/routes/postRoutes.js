const router = require('express').Router()
const {
    index,
    createPost,
    findPost,
    findByTags,
    updatePost,
    deletePost,
    findUserPosts,
} = require('../controllers/postController')
const isAuthenticated = require('../middleware/auth')

router.get('/', index)
router.post("/", isAuthenticated, createPost);
router.get("/:id", findPost);
router.post("/tags", findByTags);
router.patch("/:id", isAuthenticated, updatePost);
router.delete("/:id", isAuthenticated, deletePost);
router.get("/user/:user_id",findUserPosts)

module.exports = router