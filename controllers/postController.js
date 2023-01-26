const Post = require('../models/Posts')
const AsyncHandler = require('express-async-handler')
const { today } = require('../data')




// make post
const MakePost = AsyncHandler(async (request, response) => {
    const { username, title, post } = request.body
    
    // validate input
    const validation = validateInput(request.body)
    if(validation != true){
        return response.send(validation)
    }

    const createPost = await Post.create({
        username: username,
        title: title,
        post: post,
        created_at: today()
    }).then((data) => {
        response.json(data)
    }).catch((error) => {
        response.json({ message: error })
    })
})


// validate user input
const validateInput = (input) => {
    let post = ''
    let title = ''
    let general = ''
    let username = ''
    
    if(input.username == "" || input.title == "" || input.post == ""){
        general = "*All fields are required"
    }else if(input.username.length < 6){
        username = "*Must be minimum of 6 characters"
    }else if(input.username.length > 12){
        username = "*Must be maximum of 12 characters"
    }

    if(input.title < 6){
        title = "*Must be minimum of 6 characters"
    }else if(input.title.length > 50){
        title = "*Must be maximum of 50 characters"
    }

    if(username.length || title.length || post.length || general.length){
        return { title: title, username: username, post: post, general: general}
    }else{
        return true
    }
}




// update post
const UpdatePost = AsyncHandler(async (request, response) => {
    const { id, username, title, post } = request.body
    const updateItems = {
        username: username,
        title: title,
        post: post,
    }

    const exists = await Post.findOne({_id: id})
    if(!exists){
        return response.json({data: 'Post does not exists!'})
    }
    const update = await Post.updateOne({_id: id}, {$set: updateItems}).then((data) => {
        response.json({data: 'Updated successfully!'})
    }).catch((error) => {
        response.json({ message: error })
    })
})


// delete post 
const DeletePost = AsyncHandler(async (request, response) => {
    const { id } = request.body

    const exists = await Post.findOne({_id: id})
    if(!exists){
        return response.json({data: 'Post does not exists!'})
    }
     const remove = await Post.deleteOne({_id: id}).then((data) => {
        response.json({data: 'Deleted successfully!'})
    }).catch((error) => {
        response.json({ message: error })
    })
})



// fetch posts
const fetchPost = AsyncHandler(async (request, response) => {
    const param = request.params.param
    
    if(param == 'all'){
        const fetchAll = await Post.find().then((data) => {
            response.json(data)
        }).catch((error) => {
            response.json({ message: error })
        })
        return fetchAll
    }

    const fetchAll = await Post.find({_id: param}).then((data) => {
        response.json(data)
    }).catch((error) => {
        response.json({ message: error })
    })
})







module.exports = { 
    MakePost,
    fetchPost,
    DeletePost,
    UpdatePost,
}