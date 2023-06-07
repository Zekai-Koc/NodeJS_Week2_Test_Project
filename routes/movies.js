import express from "express";
import {
   addNewMovie,
   deleteMovie,
   readMovies,
   searchMovie,
} from "../controllers/movies.js";

const router = express.Router();

router.get("/", readMovies);

router.post("/", addNewMovie);

router.get("/:id", searchMovie);

router.delete("/:id", deleteMovie);

export default router;
