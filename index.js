const express = require('express');
const app =  express();
const port = process.env.PORT || 4000;

app.get('/', (req , res) => {
    res.send('foodies server side is running')
})
app.listen(port, () => {
    console.log(`foodies server side is running ${port}`)
  })