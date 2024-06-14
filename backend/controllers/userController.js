const User = require('../models/userModel')

const allUsers = async (req, res) => {
    try {
        const users = await User.find()
        res.json({users})
    } catch (e) {
        res.status(500).json({error: e.message})
    }
}

module.exports = {
    allUsers,
}