const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Comment
const commentSchema = new Schema ({
    comment: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model("Comment", commentSchema)