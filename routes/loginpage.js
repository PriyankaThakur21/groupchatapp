const express = require('express');

const router = express.Router();

router.get('/login',(req,res,next)=>{
    res.send('<form onsubmit="localStorage.setItem(`username`, document.getElementById(`username`).value)" action="/msg" method="POST"><label>Enter your Username </label><input id="username" type="text" name="username"><button>Submit</button></form>')
})
router.post("/msg",(req,res,next)=>{
    res.redirect('/msg');
});
module.exports=router;
