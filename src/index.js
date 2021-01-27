const express = require('express');

const app = express();

app.get('/projects',(request,response)=>{
  return response.json({message: 'Hello Kira'});
})
app.listen(3333,()=>{
  console.info('⚙️ Backend started!');
});