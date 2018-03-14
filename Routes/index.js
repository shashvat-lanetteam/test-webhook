const express=require('express');
const router=express.Router();
const createHandler = require('github-webhook-handler');
const handler = createHandler({ path: '/webhook', secret: 'webhook' });

router.get('/test',(req,res)=>{
    console.log('test');
   res.send('test1');
});



router.post('/webhook',handler);
router.get('/',(req,res)=>{
    res.send('this is a test webhook server!');
});

handler.on('push', function (event) {
    console.log('Received a push event for %s to %s',
        event.payload.repository.name,
        event.payload.ref)
    console.log('===========>','push event');
});
handler.on('issues', (event)=> {
    /*console.log('Received an issue event for %s action=%s: #%d %s',
        event.payload.repository.name,
        event.payload.action,
        event.payload.issue.number,
        event.payload.issue.title)*/
    console.log('issues');
});
handler.on('issue', (event)=> {
    /*console.log('Received an issue event for %s action=%s: #%d %s',
        event.payload.repository.name,
        event.payload.action,
        event.payload.issue.number,
        event.payload.issue.title)*/
    console.log('issue');
});

handler.on('opened',(event)=>{
   console.log('opened event');
});

module.exports={router};