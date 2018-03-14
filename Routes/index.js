const express=require('express');
const router=express.Router();

router.get('/test',(req,res)=>{
   res.send('test1');
});

router.get('/this is a test webhook server!');

module.exports={router};