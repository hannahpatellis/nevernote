/* This file is the API utility. Think of it like a controller.
   We organize all the different API calls we might want to make
   into methods that are exported from this file.

   One method per type of API call. Some methods need to take in data
   and other methods do not.

   Since we can not use jQuery's AJAX in React, we use Axios to make
   HTTP requests. We return an axios method which returns a promise.
   Returning these axios methods allows us to use .then() and .catch()
   from within our components.

   We seperate the API code from the components to keep things clean
   and also because we want to try to keep things that manipulate the
   UI inside the component and things that don't directly manipulate
   the UI in outside files. Remember, React is mostly front-end which
   is why the seperation
*/
import axios from "axios";

export default {
    /* Make a GET request to /api/todos (this references a route in our
       Express server).

       This doesn't take in any paramaters.

       See the `server.js` file to see what this route will return/do.
    */
    getTodos: function() {
        return axios.get("/api/todos");
    },
    /* Make a POST request to /api/todo (this references a route in our
       Express server) to create a new todo.

       This method expects a paramater that is an object with property
       names that match the field names defined in our Express server's
       model.

       For example, an object should be passed to this method that looks like this:
        newTodo = {
            todo: (todo name here)
        }
       
        See the `server.js` file to see what this route will return/do.
    */
    createNewTodo: function(newTodo) {
        return axios.post("/api/todo", newTodo);
    },
    /* Make a DELETE request to /api/todo (this references a route in our
       Express server) to delete an existing todo.

       This method expects a paramater that is the id of the specific todo we want to delete
       and should match the _id of the associated Mongo document for that todo.

       The id will be sent to the server as a paramater in the URL, not in the body
       of the request.
       
       See the `server.js` file to see what this route will return/do.
    */
    deleteTodo: function(id) {
        return axios.delete("/api/todo/" + id);
    },
    /* Make a PUT request to /api/todo/:id (this references a route in our
       Express server) to update an existing todo.

       This method expects two paramaters, 1) the id of the todo
       that matches the todo's Mongo document _id field and 2)
       an object that contains the information to be updated.

       For example, an object should be passed to this method that looks like this:
        updatedTodo = {
            todo: (todo name here),
            note: (note here),
            deadline: (deadline here),
            completed: (true or false),
            category: (category emoji here)
        }

       The id will be sent to the server as a paramater in the URL, not in the body
       of the request. The updatedTodo object will be sent in the body of the request.
       
       See the `server.js` file to see what this route will return/do.
    */
    updateTodo: function(updatedTodo, id) {
        return axios.put("/api/todo" + id, updatedTodo)
    }
};