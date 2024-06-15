const Post = require('../models/postModel')
const User = require('../models/userModel')

//Get all posts
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

//Create a new post
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

//Find post by id
const findPost = async (req, res) => {
    const { id } = req.params
    try {
        const post = await Post.findById(id)
        if (post) {
            res.json({post})
        } else {
            res.status(404).json({ error: 'Post not found' })
        }
    } catch (e) {
        res.status(500).json({ error: e.message })
    }
}

//Find posts by tags
const findByTags = async ( req, res) => {
    const { tags } = req.body
    try {
        const posts = await Post.find({tags: {$in: tags}})
        res.json({posts})
    } catch {
        res.status(500).json({ error: e.message })
    }
}

//Update post
const updatePost = async (req, res) => {
    const { id } = req.params
    const { content, tags } = req.body
    const { user } = req.decodedToken; 
    try {
        const post = await Post.findOneAndUpdate(
            { _id: id, user_id: user },
            { content: content, tags: tags },
            { new: true }
        )
        if (post) {
            res.json({ post })
        } else {
            res.status(404).json({ error: 'Post not found or user does not have permission to update' })
        }
    } catch (e) {
        res.status(500).json({ error: e.message })
    }
}

//Delete post
const deletePost = async (req, res) => {
    const { id } = req.params
    const { user } = req.decodedToken
    try {
        const post = await Post.findOneAndDelete({
            _id: id,
            user_id: user
        }, { new: true })
        if (post) {
            res.json({ post })
        } else {
            res.status(404).json({ error: 'Post not found or user does not have permission to delete'})
        }
    } catch (e) {
        res.status(500).json({error: e.message})
    }
}

//Find user's posts
const findUserPosts = async (req, res) =>  {
    const { user_id } = req.params
    try {
        const user_exist = await User.findById(user_id)
        if (user_exist) {
            const posts = await Post.find({
              user_id,
            }).sort({
              created_at: -1,
            });
            res.json({ posts });
        } else {
            res.status(404).json({error: "User not found"})
        }
    } catch (e) {
        res.json({error: e.message})
    }
}

module.exports = {
    index,
    createPost,
    findPost,
    findByTags,
    updatePost,
    deletePost,
    findUserPosts
}