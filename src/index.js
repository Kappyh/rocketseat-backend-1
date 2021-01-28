const express = require('express');

const app = express();

app.get('/projects',(request,response)=>{
  return response.json(['projeto1','projeto2']);
});

app.post('/projects', (request, response)=>{
  return response.json(['projeto1','projeto2','projeto3']);
});

app.put('/projects/:id', (request, response)=>{
  return response.json(['projeto4','projeto2','projeto3']);
});

app.delete('/projects/:id', (request, response)=>{
  return response.json(['projeto1','projeto3']);
});

app.listen(3333,()=>{
  console.info('⚙️ Backend started!');
});