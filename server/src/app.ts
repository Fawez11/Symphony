import express from 'express';
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.post('/register',(req,res)=>{
    res.send({
        message : `hello ${req.body.email}! Your user was registered Have fun pajaro `
    })
})
// test 
app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});