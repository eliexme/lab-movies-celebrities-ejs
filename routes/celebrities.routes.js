// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require('express').Router()
const Celeb = require('../models/Celebrity.model')

router.get('/', async(req, res)=>{
    try{
        const allCelebs = await Celeb.find()
    res.render('celebrities/celebrities', {data: allCelebs})
    }
    catch(err){
        console.error(err)
    }
    
})

//GET route to create celeb
router.get('/create', (req, res)=>{
    res.render('celebrities/new-celebrity')
})

//POST route to create celeb
router.post('/create', async(req, res)=>{
    try{
        const newCeleb = await Celeb.create({...req.body})
    res.redirect('/celebs')
    }
    catch(error){
        res.redirect('/celebs/create')
    }
})

module.exports = router

