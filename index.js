//Go to documentation
//api reference
//Application
//copy that


//app creation
const express=require('express');
const app=express();
//app creation end

app.get('/', function (req, res) {
    res.send('Thank you for calling me! I know how to open node! Yeeee!')
  })

app.listen(3000, ()=>console.log('Listening to port 3000'));

// The fun part is go to http://localhost:3000/

