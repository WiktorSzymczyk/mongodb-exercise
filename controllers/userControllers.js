const Blog = require('../models/userModel')

const createUser = async(req, res) => {
    try {
        const {username, password, description, date} = req.body

        const newUser = await User.create({
            username,
            password,
            description,
            date: new Date(),
        })
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}