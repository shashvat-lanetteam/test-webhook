const express=require('express');
const router=express.Router();
const createHandler = require('github-webhook-handler');
const handler = createHandler({ path: '/webhook', secret: 'webhook' });

router.get('/test',(req,res)=>{
    console.log('test');
   res.send('test1');
});


router.post('webhook',(req,res)=>{
    console.log(req.body);
    res.send(200);
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
    /*console.log('Received an issue event for %s action=%s: #%d %s',
        event.payload.repository.name,
        event.payload.action,
        event.payload.issue.number,
        event.payload.issue.title)*/
    console.log('issues');
});

/*router.get('/webhook',(req,res)=>{
    res.send()
});*/
module.exports={router};