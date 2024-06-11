const User = require('../models/userModel')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const register = async (req, res) => {
    const { username, email, password } = req.body

    if( username && email && password ){
        const user_exist = await User.findOne({
            username: username,
            email : email,
        });
        if (user_exist) {
            return res.status(409).json("User already exists")
        }
        const hashed_password = await bcrypt.hash(password, 10)

        const user = await User.create({
            username: username,
            email: email,
            password: hashed_password
        })

        return res.status(201).json({
        success: "User registered successfully",
        user: user
        });
    } else {
        return res.json("All fields are required")
    }
}

const login = async (req,res) => {
    const { email, password } = req.body

    if (email && password) {
        const user = await User.findOne({
            email: email,
        })
        if (user) {
            const is_password = await bcrypt.compare(password, user.password);

            if (!is_password) {
              return res.json("Please check password");
            } else {
                const token = jwt.sign({user: user._id}, 'secretKey')
                return res.json(token)
            }
        } else {
            return res.status(204).json('User not found!')
        }
    } else {
        return res.json("Please check fields")
    }
}

module.exports = {
    register,
    login
}