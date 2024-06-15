const User = require('../models/userModel')
const bcrypt = require('bcrypt')

//Get all users
const allUsers = async (req, res) => {
    try {
        const users = await User.find()
        res.json({users})
    } catch (e) {
        res.status(500).json({error: e.message})
    }
}

//Find user by id
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

//Update user
const updateUser = async (req, res) => {
    const { id } = req.params
    const { email, password } = req.body
    const { user } = req.decodedToken
    try {
        if (id === user) {
            const hashedPassword = await bcrypt.hash(password, 10)
            const updatedUser = await User.findByIdAndUpdate(id, {
                email: email,
                password: hashedPassword 
            }, {new: true}
        )
            res.json({updatedUser})
        } else {
            res.status(403).json({error: 'User does not have permission to update'})
        }
    } catch (e) {
        res.status(500).json({error: e.message})
    }
}

//Delete user
const deleteUser = async (req, res) => {
    const { id } = req.params
    try {
        const user = await User.findByIdAndDelete(id)
        if (user) {
            res.clearCookie('jwt')
            res.json({ user });
        } else {
            res.status(404).json({error: "User not found"})
        }
    } catch (e) {
        res.status(500).json({error: e.message})
    }
}

module.exports = {
    allUsers,
    findUser,
    updateUser,
    deleteUser,
}