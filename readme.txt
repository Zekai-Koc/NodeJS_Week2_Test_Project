General folder/file structure

package.json:
   nodemon
   type set to "module"
   dep and devdeps seperated.

Operations/Actions Methods and Paths
REQUEST     METHOD      ENDPOINT       FUNCTION
-------     ------      --------       --------
Read        GET         /movies         returns all movies.
Create      POST        /movies         creates a movie.
Read        GET         /movies/:id     returns the movie with the specific id
Delete      DELETE      /movies/:id     deletes the movie with the specific id


Testing
Postman

Supertest
GET /movies (read all movies) 
POST /movies (add a new movie)
POST /movies (add a new movie without a field) 
GET /movies/:id (search for a movie) 
GET /movies/:id (search for a movie that does not exist)
DELETE /movies/:id (delete a movie) 
DELETE /movies/:id (try to delete a movie that does not exist)