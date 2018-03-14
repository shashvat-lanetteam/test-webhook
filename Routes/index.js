const express=require('express');
const router=express.Router();


router.get('/test',(req,res)=>{
    console.log('test');
   res.send('test1');
});

module.exports={router};