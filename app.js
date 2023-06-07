import express from "express";

import moviesRoutes from "./routes/movies.js";

const app = express();

// Parse JSON using express.
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/movies", moviesRoutes);

export default app;
