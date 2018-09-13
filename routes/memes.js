// app.get('/', (req, res) => {
//   res.render('home')
// })
const express = require('express')
const router = express.Router() // no olvides los parentesis
const Meme = require('../models/Meme')

router.get('/', (req, res) => {
  res.render('home')
})

// vamos a utilzar el modelo para guardar en la base de datos
router.get('/new', (req, res) => {
  Meme.create({
    title: "OtrO",
    link: "http://s04.s3c.es/imag/_v0/640x400/a/8/3/TT1.jpg"
  })
    .then(meme => {
      res.render('meme', meme)
    })
    .catch()
})

router.get('/memes', (req, res, next) => {
  Meme.find()
    .then(memes => {
      res.render('list', { memes })
    })
    .catch(e => next(e))
})
router.get('/memes/:id', (req, res) => {
  // obtengo el id de lo que debo mostrar
  const { id } = req.params
  // lo busco en la base de datos
  Meme.findById(id)
    .then(meme => {
      // se loy doy al template
      res.render('detail', meme)
    })
    .catch()
})
module.exports = router;