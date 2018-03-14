const express=require('express');
const router=express.Router();

router.get('/test',(req,res)=>{
   res.send('test1');
});

module.exports={router};