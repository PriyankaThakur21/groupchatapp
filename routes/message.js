const express = require('express');

const router = express.Router();

const fs=require('fs');

router.get("/msg",(req,res,next)=>{
    fs.readFile('text.txt', (err,data)=>{
        if(err){
            console.log(err);
            data:"no chat exists";
        }
    res.send(`${data}<form onsubmit="document.getElementById('username').value=localStorage.getItem('username')" action="/" method="POST">
    <label>Enter Message</label>
    <input id="username" type="hidden" name="username">
    <input type="text" name="message">
    <button>Send</button>
    </form>`);
})
})

router.post("/",(req,res,next)=>{
    fs.writeFile("text.txt", `${req.body.username}: ${req.body.message}`,{flag:'a'}, (err)=>console.log(err));
    res.redirect('/msg');
    });


module.exports=router;