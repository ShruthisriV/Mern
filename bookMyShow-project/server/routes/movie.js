const { addMovie, getAllMovies, updateMovie, deleteMovie } = require("../controller/movie")

const movieRouter = require("express").Router();

movieRouter.post("/", addMovie);
movieRouter.post("/", getAllMovies);
movieRouter.post("/", updateMovie);
movieRouter.post("/", deleteMovie);

module.exports = movieRouter;