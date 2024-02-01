const express = require('express');
const cors = require('cors')
const mongoose = require('mongoose')
const userRoutes = require('./Routes/UserRoute')
const app = express()

app.use(cors())
app.use(express.json())

//mongo connection
mongoose.connect("mongodb://0.0.0.0:27017/netflix",{
    // useNewUrlParser:true,
    // useUnifiedTopology: true,
}).then(()=>{
    console.log("DB connected");
}).catch((err)=>{
    console.log(`MongoDB connection error : ${err}`)
})

app.use('/api/user',userRoutes)

app.listen(5000,console.log("server started"));