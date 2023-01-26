const express = require('express')
const router = express.Router()
const {
    MakePost,
    fetchPost,
    UpdatePost,
    DeletePost,
} = require('../controllers/postController')




// get requests
router.get('/api/fetch-post/:param', fetchPost)


// post requests
router.post('/api/post', MakePost)
router.post('/api/update', UpdatePost)
router.post('/api/delete', DeletePost)






module.exports = router