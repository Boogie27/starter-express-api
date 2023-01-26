const mongoose = require('mongoose')



const postsSchema  = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    post: {
        type: String,
        required: true
    },
    created_at: {
        type: Date,
        required: true
    },
})



const Post = mongoose.model("posts", postsSchema)

module.exports =  Post