const express = require('express');
const bodyParser = require('body-parser');
const {router}=require('./Routes');
const Port=process.env.PORT || 1212;
let app=express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use('/',router);
app.listen(Port,()=>{
   console.log(`server running on ${Port}`);
});