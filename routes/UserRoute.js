const express = require('express')
const router = express.Router()
const {
    CreateUser,
    fetchUser,
    UpdateUser,
    DeleteUser,
} = require('../controllers/userController')




// get requests
router.get('/api/fetch-users/:param', fetchUser)


// post requests
    router.post('/api/create',CreateUser)
router.post('/api/update', UpdateUser)
router.post('/api/delete', DeleteUser)






module.exports = router