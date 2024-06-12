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

module.exports = {
    index
}