const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const MessagingResponse = require('twilio').twiml.MessagingResponse;

const app = express();
app.use(bodyParser.urlencoded({extended: false}));
app.post('/sms/', function(req, res) {
  const twiml = new MessagingResponse();
  console.log(req.body.Body)
  console.log(req.body.From)
/*
  if(req.body.Body == "Yeet"){
    twiml.message('The Robots are coming! Head for the hills!');
  }else{
    twiml.message('shit');
  }*/

  twiml.message(req.body.Body)

  res.writeHead(200, {'Content-Type': 'text/xml'});
  res.end(twiml.toString());
});

http.createServer(app).listen(3000, () => {
  console.log('Express server listening on port 3000');
});
