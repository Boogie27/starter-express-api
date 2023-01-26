const User = require('../models/Users')
const AsyncHandler = require('express-async-handler')
const { today } = require('../data')




// make user
const CreateUser = AsyncHandler(async (request, response) => {
    const { first_name, last_name, email } = request.body
    
    // validate input
    const validation = validateInput(request.body)
    if(validation != true){
        return response.send(validation)
    }

    const exists = await User.findOne({ email: email })
    if(exists){
        return response.json({data: 'User already exists!'})
    }

    const create_user = await User.create({
        first_name: first_name,
        last_name: last_name,
        email: email,
        created_at: today()
    }).then((data) => {
        response.json(data)
    }).catch((error) => {
        response.json({ message: error })
    })
})


// validate user input
const validateInput = (input) => {
    let first_name = ''
    let last_name = ''
    let general = ''
    let email = ''
    
    if(input.first_name == "" || input.email == "" || input.last_name == ""){
        general = "*All fields are required"
    }else if(input.first_name.length < 3){
        first_name = "*Must be minimum of 3 characters"
    }else if(input.first_name.length > 12){
        first_name = "*Must be maximum of 20 characters"
    }

    if(input.last_name.length < 3){
        last_name = "*Must be minimum of 3 characters"
    }else if(input.last_name.length > 12){
        last_name = "*Must be maximum of 20 characters"
    }

    const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(input.email == ""){
        email = "*Email field is required"
    } else if(!input.email.match(validRegex)){
        email = "*Invalid email address"
    }

   

    if(first_name.length || last_name.length || email.length || general.length){
        return { first_name: first_name, last_name: last_name, email: email, general: general}
    }else{
        return true
    }
}




// update user
const UpdateUser = AsyncHandler(async (request, response) => {
    const { id, first_name, last_name, email } = request.body

    const exists = await User.findOne({_id: id})
    if(!exists){
        return response.json({data: 'User does not exists!'})
    }

    const updateItems = {
        first_name: first_name.length ? first_name : exists.first_name,
        last_name: last_name.length ? last_name : exists.last_name,
        email: email.length ? email : exists.email
    }
    
    const update = await User.updateOne({_id: id}, {$set: updateItems}).then((data) => {
        response.json({data: 'Updated successfully!'})
    }).catch((error) => {
        response.json({ message: error })
    })
})


// delete user 
const DeleteUser = AsyncHandler(async (request, response) => {
    const { id } = request.body

    const exists = await User.findOne({_id: id})
    if(!exists){
        return response.json({data: 'User does not exists!'})
    }
     const remove = await User.deleteOne({_id: id}).then((data) => {
        response.json({data: 'Deleted successfully!'})
    }).catch((error) => {
        response.json({ message: error })
    })
})



// fetch users
const fetchUser = AsyncHandler(async (request, response) => {
    const param = request.params.param
    
    if(param == 'all'){
        const fetchAll = await User.find().then((data) => {
            response.json(data)
        }).catch((error) => {
            response.json({ message: error })
        })
        return fetchAll
    }

    const fetchAll = await Users.find({_id: param}).then((data) => {
        response.json(data)
    }).catch((error) => {
        response.json({ message: error })
    })
})







module.exports = { 
    CreateUser,
    fetchUser,
    DeleteUser,
    UpdateUser,
}