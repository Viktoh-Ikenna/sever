const express = require('express');
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://viktoh:<password>@natours.fgkkp.mongodb.net/natours?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  },()=>console.log('our db is connected'));

const app =express();


app.post('/',(req,res)=>{

})
app.listen(4500,res=>console.log('app is rinning on port 4500'))