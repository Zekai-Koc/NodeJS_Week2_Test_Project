import app from "./app.js";

const PORT = process.env.PORT || 3000;

// Set the server to listen at port: PORT.
app.listen(PORT, () => console.log(`Server listening at port: ${PORT}`));
