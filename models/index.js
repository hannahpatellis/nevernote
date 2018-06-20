/* This file allows us to reference the folder itself
   and be able to use dot-notation to reference individual
   models/collections.

   Since we only have one model, this is a little redundant,
   but it's good practice.

   For example: To reference/make an action on the Todo collection
   we would require this file as a variable name like `db` and then
   use dot-notation to reference one of the exports. Here that would be
   db.Todo.<the mongoose method you want to preform>
*/

module.exports = {
    Todo: require("./Todo")
};