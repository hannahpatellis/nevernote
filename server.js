const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
/* Require all the models in the models folder
   so we can access them by referencing db then a .
   then the name of the model we want to manipulate */
const db = require("./models");
const PORT = process.env.PORT || 3001;
const app = express();

// Configure body parser to accept and decode incoming POST requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve up static assets (usually on Heroku)
/* If the Node enviornment mode is production (if we're running this in production)
   then we want to serve all our static assets from the build folder located in the
   client folder. Remember, when the React app is done, we build it.
   Building turns the React app code into a few simple files that are
   ready for serving to any web browser and include all the front-end files
*/
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

/* GET route "/api/todos"
   Accepts GET requests to the /api/todos route
   and then goes to our Todo Mongoose model and
   finds all documents and returns them as a response to the request.
   If an error occurs during the database find operation, a status code
   of 422 (Unprocessable Entity) is sent to the client along with the 
   error itself in JSON format.

   We send a status code with res.status and we can add .json() to the end
   of that to send JSON data along with the status code.
*/
app.get("/api/todos", (req, res) => {
  /* Execute the command to find all documents in the Todo collection
     Then respond back to the client with the results from the operation.
     In this case, those results will be all the todos.
  */
  db.Todo
    .find({})
    .then(results => res.json(results))
    .catch(err => {
      console.log(err);
      res.status(422).json(err);
    });
});

/* POST route "/api/todo"
   Accepts POST requests to the /api/todo route
   and then goes to our Todo Mongoose model and
   creates a new document using the data sent in the body of the POST
   request.

   The POST request expects a todo, note, deadline, and category
   property in the body of the request. The todo field is required
   by the model however, so if todo is missing, an error will be throw.
   (See the Todo model to see the configuration.)
   
   If an error occurs during the database find operation, a status code
   of 422 (Unprocessable Entity) is sent to the client along with the 
   error itself in JSON format.

   We send a status code with res.status and we can add .json() to the end
   of that to send JSON data along with the status code.

   Mongoose's .create() method expects an object, so we need to make a
   new object with property names that match the field names we specified 
   in our Todo model (/models/Todo.js). Their values are equal to the values
   stored in the body of the request, which we access through req.body (lol)
*/
app.post("/api/todo", (req, res) => {
  // Make a single object to send to Mongo
  const newTodo = {
    todo: req.body.todo,
    note: req.body.note,
    deadline: req.body.deadline,
    category: req.body.category
  };
  /* Execute the command to create a new document on the Todo model
     Then respond back to the client with the results from the operation.
     In this case, those results will be the new document created.
  */
  db.Todo
    .create(newTodo)
    .then(results => res.json(results))
    .catch(err => {
      console.log(err);
      res.status(422).json(err);
    });
});

app.delete("/api/todo/:id", (req, res) => {
  db.Todo
    .remove({ _id: req.params.id })
    .then(results => res.json(results))
    .catch(err => {
      console.log(err);
      res.status(422).json(err);
    });
});

/* This route is special and only used in production mode.
   If a route is not found above, the "*" wildcard will send
   all the request to the built React app located in /client/build/index.html.
   This route always come last -- it's a catch-all
*/
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

/* Connect to a Mongo database using either an enviornmental variable
   or if one isn't availabl,e connect to the one in the string
*/
mongoose.connect(process.env.MONGODB_URL || "mongodb://prod:123456a@ds263500.mlab.com:63500/heroku_2jkm3tsf");

app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
