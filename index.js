//Go to documentation
//api reference
//Application
//copy that


//app creation
const express=require('express');
const app=express();
//app creation end

app.get('/', function (req, res) {
    res.send('ALhamdulillah')
  })

app.get('/fruits/banana', function (req, res) {
    res.send({fruits:'banana',quantity:1000,price: 10000})
  })

app.listen(3000, ()=>console.log('Listening to port 3000'));

// The fun part is go to http://localhost:3000/
//To auto restart,we installed 'nodemon'
//further go to http://localhost:3000/fruits/banana