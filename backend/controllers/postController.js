const Post = require('../models/postModel')

const index = async (req, res) => {
    try {
        const posts = await Post.find().sort({ 
            created_at: -1
        })
        res.json(posts)
    } catch (e) {
        res.status(500).json({ error: e.message })
    }
}
const createPost = async (req, res) => {
    const { content, tags } = req.body
    const { user } = req.decodedToken;
    try {
        if(content) {
            const post = await Post.create({
              content: content,
              tags: tags,
              user_id: user,
            });
            res.status(201).json({ post });
        } else {
            res.status(400).json({ error: "Content is required" });
        }
    } catch (e) {
        res.status(500).json({ error: e.message })
    }
}

const findPost = async (req, res) => {
    const { id } = req.params
    try {
        const post = await Post.findById(id)
        if (post) {
            res.json(post)
        } else {
            res.status(404).json({ error: 'Post not found' })
        }
    } catch (e) {
        res.status(500).json({ error: e.message })
    }
}

module.exports = {
    index,
    createPost,
    findPost,
}