const express=require('express');
const router=express.Router();
const createHandler = require('github-webhook-handler');
const handler = createHandler({ path: '/webhook', secret: 'webhooksecret' });

router.get('/test',(req,res)=>{
   res.send('test1');
});

router.get('/',(req,res)=>{
    res.send('this is a test webhook server!');
});

handler.on('push', function (event) {
    console.log('Received a push event for %s to %s',
        event.payload.repository.name,
        event.payload.ref)
});

/*router.get('/webhook',(req,res)=>{
    res.send()
});*/
module.exports={router};