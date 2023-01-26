const express = require('express')
const mongoose = require('mongoose')
const app = express()
const cors = require('cors')

// routes
const UserRoute = require('./routes/UserRoute') 



require('dotenv').config()
const PORT = process.env.PORT || 3002


app.use(express.json())
app.use(cors())

// database connection
const dataBaseURL = process.env.MONGOOSE_URI
const connectParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}

// connecting to mongoose
mongoose.connect(dataBaseURL, connectParams)
.then(() => console.log('Connected to MongoDB.....'))
.catch((e) => console.log("Error: " + e))



app.get("/", (request, response) => {
    console.log('Backend Developer Crudapp')
    response.send("Backend Developer Crudapp")
})





// post content
app.use(UserRoute)



app.listen(PORT, () => {
    console.log("Server running on port: " + PORT)
})




