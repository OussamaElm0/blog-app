const User = require('../models/userModel')

const allUsers = async (req, res) => {
    try {
        const users = await User.find()
        res.json({users})
    } catch (e) {
        res.status(500).json({error: e.message})
    }
}

const findUser = async (req, res) => {
    const { id } = req.params
    try {
        const user = await User.findById(id)
        if(user) {
            res.json({user})
        } else {
            res.status(404).json({error: "User not found"})
        }
    } catch (e) {
        res.json({error: e.message})
    }
}

module.exports = {
    allUsers,
    findUser,
}