// import express from 'express';

const express = require('express');
const bodyParser = require ('body-parser');
const cors = require ('cors');
const morgan =  require ('morgan');
const port = 3000;



const app = express();
app.use(morgan('combine'))
app.use(bodyParser.json())
app.use(cors())





app.get('/', (req, res) => {
    res.send({
        message : 'Hello pajaro !'});
});
app.post('/register',(req,res)=>{
    res.send({
        message : `hello ${req.body.email}! Your user was registered Have fun pajaro `
    })
})
// app.listen(process.env.PORT || 3000)

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});

