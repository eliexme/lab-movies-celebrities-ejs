// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require('express').Router()
const Celeb = require('../models/Celebrity.model')
const Movie = require('../models/Movies.model')

router.get('/', async(req, res)=>{
    try{
        const allMoviesData = await Movie.find()
        console.log(allMoviesData)
        res.render('movies/movies', {moviesData: allMoviesData})
    }
    catch(error){
        console.log(error)
    }
    res.render('movies/movies')
})

//GET create movie
router.get('/create', async(req, res)=>{
    const celebData = await Celeb.find()
    console.log(celebData)
    res.render('movies/new-movie', {celebData: celebData})
})


//POST create movie
router.post('/create', async(req, res)=>{
    try{
        const newMovie = await Movie.create({...req.body})
    
    res.redirect('/movies')
    }
    catch(error){
        console.log('error in movie creation')
        res.redirect('/movies/create')
    }
})

router.get('/:movieId', async(req, res)=>{
    const {movieId} = req.params
    const reqMovie = await Movie.findById(movieId)
    res.render('movies/movie-details', {oneMovieData: reqMovie})
})


module.exports = router