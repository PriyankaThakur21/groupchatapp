const express = require('express');
const fs=require('fs');
const app=express();

const loginRouter=require('./routes/loginpage');
const messageRouter=require('./routes/message');

const bodyparser = require('body-parser');
app.use(bodyparser.urlencoded({extended:true}));

app.use(loginRouter);

app.use(messageRouter);

app.listen(3000);