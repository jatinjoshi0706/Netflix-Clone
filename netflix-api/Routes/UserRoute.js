const { removeMovieFromLiked } = require('../../netflix-ui/src/store');
const { addTolikedMovies, getLikedMovies } = require('../Controllers/UserController')
const router = require('express').Router();


router.post("/add", addTolikedMovies );
router.get("/liked/:email", getLikedMovies );
router.put("/delete",removeMovieFromLiked);

module.exports = router;