// Import uuid for creating unique ids.
import { v4 as uuidv4 } from "uuid";

// Create a list of movies.
let movies = [
   {
      id: "1",
      title: "Inception",
      director: "Chirstopher Nolan",
      release_date: "2010-07-16",
   },
   {
      id: "2",
      title: "The Irishman",
      director: "Martin Scorsese",
      release_date: "2019-09-27",
   },
];

export const readMovies = (req, res) => {
   // Check if there is any movie.
   if (movies.length < 1) {
      res.status(500);
      res.send(`No movies in the list!`);
      return;
   }
   res.status(200);
   res.send(movies);
};

export const addNewMovie = (req, res) => {
   const { title, director, release_date } = req.body;

   // Check if there is/are empty field(s) in the body.
   if (!title || !director || !release_date) {
      res.status(400);
      res.send(
         "Empty field(s). Please fill the empty field(s) on the form and submit again!"
      );
      return;
   }

   // Check if there is id field in the body. Additional check for demo purposes.
   const { id } = req.body;
   const movie = movies.find((movie) => movie.id === id);
   if (movie) {
      res.status(400);
      res.send(`Movie with id: ${id} already exists! No movie added.`);
      return;
   }

   const newMovie = {
      id: id || uuidv4(),
      title,
      director,
      release_date,
   };

   movies.push(newMovie);
   res.status(200);
   res.send(`Movie with the title: ${title} added to the list.`);
};

export const searchMovie = (req, res) => {
   const { id } = req.params;

   for (let movie of movies) {
      if (movie.id === id) {
         res.status(200);
         res.send(movie);
         return;
      }
   }
   res.status(404);
   res.send(`Movie with id: ${title} not found!`);
};

export const deleteMovie = (req, res) => {
   const { id } = req.params;

   const indexMovie = movies.findIndex((movie) => movie.id === id);

   if (indexMovie === -1) {
      res.status(404);
      res.send(`No movie found with id: "${id}" in the database!`);
      return;
   }

   // In case of async task we should add await to the following line.
   movies.splice(indexMovie, 1);
   res.status(200);
   res.send(`Movie with id: ${id} deleted!`);
};
