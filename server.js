const express = require('express');
const bodyParser = require('body-parser');
const {router}=require('./Routes');

const createHandler = require('github-webhook-handler');
const handler = createHandler({ path: '/webhook', secret: 'webhook' });


const Port=process.env.PORT || 1212;
let app=express();
app.use(handler);
/*app.use('/webhook',handler);*/
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.post('/webhook',(req,res)=>{
   console.log(req.body);
   res.sendStatus(200)
});

handler.on('error', function (err) {
    console.error('Error:', err.message);
});

handler.on('push', function (event) {
    console.log('Received a push event for %s to %s',
        event.payload.repository.name,
        event.payload.ref);
});

handler.on('issue_comments', function (event) {
    console.log('issue comment webhook!!!!!');
});

handler.on('issues', function (event) {
    console.log('Received an issue event for %s action=%s: #%d %s',
        event.payload.repository.name,
        event.payload.action,
        event.payload.issue.number,
        event.payload.issue.title);
});
app.listen(Port,()=>{
   console.log(`server running on ${Port}`);
});