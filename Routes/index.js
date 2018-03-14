const express=require('express');
const router=express.Router();
const createHandler = require('github-webhook-handler');
const handler = createHandler({ path: '/webhook', secret: 'webhooksecret' });

router.get('/test',(req,res)=>{
    console.log('test');
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
handler.on('issues', function (event) {
    console.log('Received an issue event for %s action=%s: #%d %s',
        event.payload.repository.name,
        event.payload.action,
        event.payload.issue.number,
        event.payload.issue.title)
});

/*router.get('/webhook',(req,res)=>{
    res.send()
});*/
module.exports={router};