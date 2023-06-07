import app from "../app.js";
import request from "supertest";

describe("Testing for movies endpoints", () => {
   test("GET /movies (read all movies)", async () => {
      await request(app).get("/movies").expect(200);
   });

   test("POST /movies (add a new movie)", async () => {
      const data = {
         title: "test title",
         director: "test director",
         release_date: "test date",
      };
      await request(app)
         .post("/movies")
         .send(data)
         .expect(200)
         .then((response) => {
            expect(response.text).toEqual(
               "Movie with the title: test title added to the list."
            );
         });
   });

   test("POST /movies (add a new movie without a field)", async () => {
      const data = {
         director: "test director",
         release_date: "test date",
      };
      await request(app)
         .post("/movies")
         .send(data)
         .expect(400)
         .then((response) => {
            expect(response.text).toEqual(
               "Empty field(s). Please fill the empty field(s) on the form and submit again!"
            );
         });
   });

   test("GET /movies/:id (search for a movie)", async () => {
      await request(app).get("/movies/2").expect(200);
   });

   test("GET /movies/:id (search for a movie that does not exist)", async () => {
      await request(app).get("/movies/garbage_id").expect(404);
   });

   test("DELETE /movies/:id (delete a movie)", async () => {
      await request(app).delete("/movies/2").expect(200);
   });

   test("DELETE /movies/:id (try to delete a movie that does not exist)", async () => {
      await request(app).delete("/movies/garbage_id").expect(404);
   });

   // test("POST /weather - With incorrect input", async () => {
   //    const data = { cityName: "AmsterdamQQQ" };
   //    await request(app).post("/weather").send(data).expect(404);
   // });

   // test("POST /weather - Incorrect key", async () => {
   //    const data = { cityNamePPP: "Amsterdam" };
   //    await request(app).post("/weather").send(data).expect(405);
   //    // .then((response) => {
   //    //    console.log("----------", response.body.name);
   //    //    expect(response.body.name).toEqual(data.cityName);
   //    // });
   // });
});
