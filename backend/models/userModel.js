const mongoose = require('mongoose')

const userScheame = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        types: String,
        unique: true,
        required: true
    },
})

module.exports = mongoose.model('user', userScheame)