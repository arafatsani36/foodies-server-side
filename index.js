const express = require('express');
const app =  express();
const cors = require('cors')
const port = process.env.PORT || 4000;

app.use(cors())
const allchef = require('./data/chefdetails.json')
const chefrecipe = require('./data/chefrecipes.json')


app.get('/', (req , res) => {
    res.send('foodies server side is running')
})
app.get('/allchef', (req, res) => {
    res.send(allchef)
})

 app.get('/chefrecipe', (req, res) => {
     res.send(chefrecipe)
 })

  app.get('/chefrecipe/:id', (req , res) => {
    const id = req.params.id;
    const selectedRecipe = chefrecipe.find(n => n._id === id);
     res.send(selectedRecipe)
 })

 app.get('/allchef/:id', (req , res) => {
     const id = parseInt(req.params.id);
     
    const Chef = chefrecipe.filter(n => parseInt(n.category_id) === id);
    res.send(Chef)

 })

app.listen(port, () => {
    console.log(`foodies server side is running ${port}`)
  })