/* In this file we create a schema for our Mongo collection
   and then turn it into a model. This allows us to outline
   what data we want to store in the database and allows us to
   set restrictions on the type of data we want to store along
   with other options like validation.

   Because we are referencing Mongoose methods, we have to require
   the mongoose module.
*/
const mongoose = require("mongoose");
// Create a Schema constructor from mongoose.Schema
const Schema = mongoose.Schema;

/* Use the Schema constructor created above to make a new schema.
   In this schema we pass an object with property names that match
   the field names we want to use in our database. We can set those
   property names to objects which contain the properties for each
   field, such as type and validation.
*/
const todoSchema = new Schema({
    todo: {
        // We want the todo field to be a string, and it's required
        type: String,
        required: true
    },
    note: {
        // We want the note field to be a string
        type: String
    },
    deadline: {
        // We want the deadline field to be a string
        type: String
    },
    completed: {
        /* We want the completed field to be a boolean, it's required, and
           it defaults to false so any new documents created have a completed
           value of false
        */
        type: Boolean,
        required: true,
        default: false
    },
    createdAt: {
        /* We want the createdAd field to be a Date, and
           it defaults the current date so any new documents created have a completed
           value of the date and time the document was created
        */
        type: Date,
        default: Date.now
    },
    category: {
        // We want the category field to be a string
        type: String
    }
});

/* Create a variable and store the model in it.
   To create the model we use mongoose.model and
   pass in the collection name ("Todo") and the
   schema it will use (todoSchema -- written right above)
*/
const Todo = mongoose.model("Todo", todoSchema);

/* Export this model as Todo so it's accessable outside this file.
   We now have a Todo object that contains the schema as well as
   all the available mongoose methods at our disposal.
*/
module.exports = Todo;