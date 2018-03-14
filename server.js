const express = require('express');
const bodyParser = require('body-parser');
const {router}=require('./Routes');

const createHandler = require('github-webhook-handler');
const handler = createHandler({ path: '/webhook', secret: 'webhook' });


const Port=process.env.PORT || 1212;
let app=express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use('/',handler);


handler.on('error', function (err) {
    console.error('Error:', err.message);
});

handler.on('push', function (event) {
    console.log('Received a push event for %s to %s',
        event.payload.repository.name,
        event.payload.ref);
});

handler.on('opened', function (event) {
    console.log('opened webhook!!!!!');
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