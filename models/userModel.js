const mongoose = require('mongoose')
const {Schema} = mongoose

const userSchema = new Schema({
    username: {
        type: String,
        required: [true, 'You should write something here'],
    },
    password: {
        type: String,
        required: true, ['You should write something here'],
    },
    description:  String,
    date: Date
})

module.exports = mongoose.model('User', userSchema)