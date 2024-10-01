require('dotenv').config();
const express = require('express');
const authRouter = require('./routes/authRoute.js');
const app = express();

const port = process.env.PORT || 8080;

app.get('/',(req,res)=>{
    res.status(200).json({
        status: 'success',
        message : 'Hello world'
    })
})
app.use('/api/auth',authRouter);
//if no route is found
app.use('*',(req,res)=>{
    res.status(404).json({
        status:'fail',
        message:'Not Found'
    })
})
app.listen(3000,()=>{
    console.log(`server listeing on ${port}`);
})